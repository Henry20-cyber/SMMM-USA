// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=deno";

// 1. Better practice: Define CORS headers once
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Or your specific domain
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // 2. Handle CORS Preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecret) throw new Error("Missing STRIPE_SECRET_KEY");

    const stripe = new Stripe(stripeSecret, {
      apiVersion: "2024-04-10",
    });

    const body = await req.json();
    const { donor_name, donor_email, amount } = body;

    // Validation logic...
    if (!donor_name || donor_name.length < 2) {
       return new Response(JSON.stringify({ error: "Invalid name" }), { 
         status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } 
       });
    }

    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount < 1) {
       return new Response(JSON.stringify({ error: "Invalid amount" }), { 
         status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } 
       });
    }

    // 3. Robust URL handling (using env vars for production)
    const siteUrl = Deno.env.get("SITE_URL") ?? "http://localhost:5173";

    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ["card"],
        mode: "payment",
        customer_email: donor_email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Church Donation" },
              unit_amount: Math.round(parsedAmount * 100), // Ensure it's an integer
            },
            quantity: 1,
          },
        ],
        success_url: `${siteUrl}/donation-success`,
        cancel_url: `${siteUrl}/donation-cancel`,
        metadata: { donor_name, donor_email },
      }
      // Note: Removed the internal UUID. For true idempotency, 
      // pass a header from your frontend: req.headers.get("x-idempotency-key")
    );

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-checkout-public' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"donor_name":"John Doe","donor_email":"john.doe@example.com","amount":25.00}'

*/
