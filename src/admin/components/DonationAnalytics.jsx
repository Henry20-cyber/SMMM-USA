import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function DonationAnalytics() {
  const [donations, setDonations] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    monthly: 0,
    successful: 0,
    failed: 0,
  });

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.log(error);
      return;
    }

    setDonations(data);

    calculateStats(data);
  };

  const calculateStats = (data) => {
    const total = data.reduce(
      (sum, donation) => sum + Number(donation.amount),
      0
    );

    const successful = data.filter(
      (d) => d.payment_status === "success"
    ).length;

    const failed = data.filter(
      (d) => d.payment_status === "failed"
    ).length;

    const currentMonth = new Date().getMonth();

    const monthly = data
      .filter(
        (d) =>
          new Date(d.created_at).getMonth() === currentMonth
      )
      .reduce(
        (sum, donation) => sum + Number(donation.amount),
        0
      );

    setStats({
      total,
      monthly,
      successful,
      failed,
    });
  };

  // CHART DATA
  const chartData = donations.map((donation) => ({
    date: new Date(donation.created_at).toLocaleDateString(),
    amount: Number(donation.amount),
  }));

  return (
    <div className="mt-8 space-y-8">
      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <p className="text-sm text-slate-500">
            Total Donations
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ${stats.total.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-sm text-slate-500">
            Monthly Donations
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ${stats.monthly.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-sm text-slate-500">
            Successful Payments
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stats.successful}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-sm text-slate-500">
            Failed Payments
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {stats.failed}
          </h2>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-xl border">
        <h2 className="text-xl font-bold mb-6">
          Donation Trends
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT DONATIONS */}
      <div className="bg-white p-6 rounded-xl border">
        <h2 className="text-xl font-bold mb-6">
          Recent Donations
        </h2>

        <div className="space-y-4">
          {donations
            .slice()
            .reverse()
            .slice(0, 5)
            .map((donation) => (
              <div
                key={donation.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium">
                    {donation.donor_name || "Anonymous"}
                  </p>

                  <p className="text-sm text-slate-500">
                    {donation.donor_email}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    ${donation.amount}
                  </p>

                  <p
                    className={`text-sm ${
                      donation.payment_status === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {donation.payment_status}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
