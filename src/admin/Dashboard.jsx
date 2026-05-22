import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import { supabase } from "../supabase/supabaseClient";
import AnnouncementManager from "./components/AnnouncementsManager";
import { useVisitorStats } from "../hooks/useVisitorStats";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

export default function Dashboard() {
  const { user } = useAuth();
  const { isAdmin, role } = useAdmin();
  const [lastLogin, setLastLogin] = useState(null);
  const [recentAdmins, setRecentAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use the visitor stats hook (only works for admins)
  const { uniqueVisitors, todayVisitors, percentageChange, loading: statsLoading } = useVisitorStats();

  const getLocationFromIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) throw new Error('Failed to fetch location');
      const data = await response.json();
      
      if (data.error) return 'Location unavailable';
      
      const locationParts = [];
      if (data.city) locationParts.push(data.city);
      if (data.region) locationParts.push(data.region);
      if (data.country_name) locationParts.push(data.country_name);
      
      return locationParts.length > 0 ? locationParts.join(', ') : 'Unknown Location';
    } catch (error) {
      console.error('Error getting location:', error);
      return 'Location detection failed';
    }
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchDashboardData = async () => {
      try {
        setError(null);
        
        // Only proceed if user is admin
        if (!isAdmin) {
          setError("Access denied. Admin privileges required.");
          setLoading(false);
          return;
        }
        
        // 1. Check for existing login in last 5 minutes
        const { data: existing, error: existingError } = await supabase
          .from("admin_logs")
          .select("id")
          .eq("user_id", user.id)
          .gte("login_time", new Date(Date.now() - 5 * 60 * 1000).toISOString())
          .maybeSingle();

        if (existingError) throw existingError;

        // 2. Insert new login log if not exists in last 5 minutes (Removed 'role' field to fix schema cache crash)
        if (!existing) {
          const location = await getLocationFromIP();
          
          const { error: insertError } = await supabase
            .from("admin_logs")
            .insert({
              user_id: user.id,
              email: user.email,
              location: location,
              login_time: new Date().toISOString()
            });

          if (insertError) throw insertError;
        }

        // 3. Fetch recent admin logs explicitly by column to avoid pulling a non-existent 'role' column
        const { data: logs, error: logsError } = await supabase
          .from("admin_logs")
          .select("id, user_id, email, location, login_time")
          .order("login_time", { ascending: false })
          .limit(10);

        if (logsError) throw logsError;

        if (isMounted) {
          if (logs && logs.length > 0) {
            setLastLogin(logs[0]);
            setRecentAdmins(logs.slice(1, 6));
          }
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Dashboard Load Error:", error);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    if (user && isAdmin !== undefined) {
      fetchDashboardData();
    }
    
    return () => {
      isMounted = false;
    };
  }, [user, isAdmin, role]);

  if (loading || statsLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center bg-red-50 p-8 rounded-xl border border-red-200">
          <h2 className="text-red-600 font-bold mb-2">Error Loading Dashboard</h2>
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6 text-slate-800">
            Overview {role === 'super_admin' && <span className="text-sm text-purple-600 ml-2">(Super Admin)</span>}
          </h1>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatsCard 
              title="Today's Visitors" 
              value={todayVisitors} 
              icon="today" 
              subtitle="Unique visitors today"
            />
            <StatsCard 
              title="Total Visitors" 
              value={uniqueVisitors.toLocaleString()} 
              icon="group" 
              subtitle="All time unique visitors"
            />
          </div>

          {/* Visitor Trend Indicator */}
          {percentageChange !== 0 && (
            <div className="mt-2 text-sm">
              {percentageChange > 0 ? (
                <span className="text-green-600">↑ {percentageChange}%</span>
              ) : (
                <span className="text-red-600">↓ {Math.abs(percentageChange)}%</span>
              )} 
              {' '}from yesterday
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LAST LOGIN PANEL */}
            <div className="mt-8 bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">history</span>
                Last Admin Login
              </h2>
              {lastLogin ? (
                <div className="text-sm text-slate-600 space-y-2 bg-slate-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <strong>Email:</strong>
                    <span className="font-mono text-xs">{lastLogin.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <strong>Role:</strong>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                      {role || 'admin'} {/* Fallbacks safely to the local useAdmin() role hook value */}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <strong>Location:</strong>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {lastLogin.location || 'Unknown'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <strong>Time:</strong>
                    <span>{new Date(lastLogin.login_time).toLocaleString()}</span>
                  </div>
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
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentAdmins.length > 0 ? (
                  recentAdmins.map((admin) => (
                    <div 
                      key={admin.id} 
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-slate-600 border-b border-slate-100 pb-3 hover:bg-slate-50 p-2 rounded transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-slate-800">{admin.email}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <span className="material-symbols-outlined text-xs">location_on</span>
                            {admin.location || 'Unknown'}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-blue-900 font-mono mt-1 sm:mt-0">
                        {new Date(admin.login_time).toLocaleString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 italic text-sm">No activity recorded</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Announcement Manager */}
          <div className="mt-6">
            <AnnouncementManager />
          </div>
          
        </main>
      </div>
    </div>
  );
}