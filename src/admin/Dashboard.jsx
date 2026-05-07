import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import { supabase } from "../supabase/supabaseClient";

export default function Dashboard() {
  const [stats, setStats] = useState({ donations: 0, visitors: 0, admins: 0 });
  const [lastLogin, setLastLogin] = useState(null);
  const [recentAdmins, setRecentAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchDashboardData = async () => {
      try {
        // 1. Fetch Stats
        const { data: donations } = await supabase
          .from("donations")
          .select("amount")
          .eq("status", "success");

        const { count: visitors } = await supabase
          .from("visits")
          .select("*", { count: "exact", head: true });

        // 2. Fetch Admin Logs (Limited to 5)
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const { data: logs } = await supabase
          .from("admin_logs")
          .select("*")
          .order("login_time", { ascending: false })
          .limit(5);

        const { data: existing } = await supabase
  .from("admin_logs")
  .select("id")
  .eq("user_id", user.id)
  .gte("login_time", new Date(Date.now() - 5 * 60 * 1000).toISOString()) // last 5 mins
  .maybeSingle();

if (!existing) {
  await supabase.from("admin_logs").insert({
    user_id: user.id,
    email: user.email,
    location: 'Unknown',
    login_time: new Date().toISOString()
  });
}

    const totalDonations = donations?.reduce((sum, d) => sum + d.amount, 0) || 0;

        if (isMounted) {
          setStats({
            donations: totalDonations,
            visitors: visitors || 0,
            admins: logs?.length || 0,
          });

          if (logs && logs.length > 0) {
            setLastLogin(logs[0]);
            setRecentAdmins(logs);
          }
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Dashboard Load Error:", error);
          setLoading(false);
        }
      }
    };

    fetchDashboardData();
    
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">Overview</h1>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Total Donations" value={`₦${stats.donations.toLocaleString()}`} icon="payments" />
            <StatsCard title="Total Visitors" value={stats.visitors} icon="group" />
            <StatsCard title="Admin Logins" value={stats.admins} icon="shield" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LAST LOGIN PANEL */}
            <div className="mt-8 bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">history</span>
                Last Admin Login
              </h2>
              {lastLogin ? (
                <div className="text-sm text-slate-600 space-y-2 bg-slate-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> {lastLogin.email}</p>
                  <p><strong>Location:</strong> {lastLogin.location}</p>
                  <p><strong>Time:</strong> {new Date(lastLogin.login_time).toLocaleString()}</p>
                </div>
              ) : (
                <p className="text-slate-400 italic">No login data yet</p>
              )}
            </div>

            {/* RECENT ACTIVITY PANEL */}
            <div className="mt-8 bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">list_alt</span>
                Recent Admin Activity
              </h2>
              <div className="space-y-3">
                {recentAdmins.length > 0 ? (
                  recentAdmins.map((admin) => (
                    <div key={admin.id} className="flex justify-between text-sm text-slate-600 border-b border-slate-50 pb-2">
                      <span className="font-medium">{admin.email}</span>
                      <span className="text-slate-400">{admin.location}</span>
                      <span className="text-blue-900 font-mono">
                        {new Date(admin.login_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 italic text-sm">No activity recorded</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}