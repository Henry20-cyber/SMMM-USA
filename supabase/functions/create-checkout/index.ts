import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Initialize Stripe outside the handler for better performance
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
  apiVersion: "2024-04-10",
  httpClient: Stripe.createFetchHttpClient(), // Recommended for Edge Runtimes
});

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { amount, donor_name, donor_email } = body;

    // Validation: Ensure amount is a valid number
    const unitAmount = Math.round(Number(amount) * 100);
    if (isNaN(unitAmount) || unitAmount <= 0) {
      throw new Error("Invalid donation amount.");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: donor_email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Church Donation",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      // Note: For production, these should be environment variables or actual URLs
      success_url: "http://localhost:5173/donation-success",
      cancel_url: "http://localhost:5173/donation-cancel",
      metadata: {
        donor_name,
        donor_email,
      },
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400, // Usually a 400 for client-side input errors
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});