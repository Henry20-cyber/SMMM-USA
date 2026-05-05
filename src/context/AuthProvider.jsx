import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Session error:", error.message);
        }

        setUser(data.session?.user || null);
      } catch (err) {
        console.error("Unexpected auth error:", err);
      } finally {
        setLoading(false); // ✅ ALWAYS resolves
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    isAdmin: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <p className="text-slate-500">Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};