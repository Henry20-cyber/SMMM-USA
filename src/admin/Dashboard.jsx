import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import useAuth from "../hooks/useAuth";
import { supabase } from "../supabase/supabaseClient";

export default function Dashboard() {
  
  const { user } = useAuth();

console.log("USER:", user);
  
  const [stats, setStats] = useState({
    donations: 0,
    visitors: 0,
    admins: 0,
  });

  // ✅ FIX: Move function ABOVE useEffect
  const fetchDashboardData = async () => {
    const { data: donations } = await supabase
      .from("donations")
      .select("amount")
      .eq("status", "success");

    const { count: visitors } = await supabase
      .from("visits")
      .select("*", { count: "exact", head: true });

    const { data: admins } = await supabase
      .from("admin_logs")
      .select("id");

    const totalDonations =
      donations?.reduce((sum, d) => sum + d.amount, 0) || 0;

    setStats({
      donations: totalDonations,
      visitors: visitors || 0,
      admins: admins?.length || 0,
    });
  };

  useEffect(() => {
  const fetchData = async () => {
    await fetchDashboardData();
  };

  fetchData();
}, []);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Total Donations"
              value={`₦${stats.donations}`}
              icon="banknote"
            />
            <StatsCard
              title="Total Visitors"
              value={stats.visitors}
              icon="users"
            />
            <StatsCard
              title="Admin Logins"
              value={stats.admins}
              icon="shield"
            />
          </div>

          <div className="mt-8 bg-white border rounded-xl p-6 h-72 flex items-center justify-center text-slate-400">
            Analytics & Charts (Next step)
          </div>
        </main>
      </div>
    </div>
  );
}