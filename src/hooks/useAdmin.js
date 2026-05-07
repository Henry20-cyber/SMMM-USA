import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import useAuth from "./useAuth";

export default function useAdmin() {
  const { user } = useAuth();

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("admins")
        .select("role")
        .eq("id", user.id)
        .single();

      setRole(data?.role || null);
      setLoading(false);
    };

    fetchRole();
  }, [user]);

  return {
    role,
    isAdmin: !!role,
    isSuperAdmin: role === "super_admin",
    loading,
  };
}