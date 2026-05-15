// DonationForm.jsx
import { useState } from "react";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    donor_name: "",
    donor_email: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://vhvsqjaidnxcoevkopmu.supabase.co/functions/v1/create-checkout-public", // <--- REPLACE THIS
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from backend:", data);
        alert("Failed to initialize payment. Check console.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Error connecting to the payment server.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleDonate} className="space-y-4 w-full">
      <input
        type="text"
        name="donor_name"
        placeholder="Full Name"
        required
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-secondary"
      />

      <input
        type="email"
        name="donor_email"
        placeholder="Email Address"
        required
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:ring-2 focus:ring-secondary"
      />

      <div className="relative">
        <span className="absolute left-4 top-3 text-gray-500">$</span>
        <input
          type="number"
          name="amount"
          placeholder="Amount (USD)"
          min="1"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-3 text-black outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <button
        disabled={loading}
        className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50"
      >
        {loading ? "Redirecting to Stripe..." : "Donate Now"}
      </button>
    </form>
  );
}