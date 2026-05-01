import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data?.user) {
        const role = data.user.user_metadata?.role;
        if (role === "admin") {
          setIsAdmin(true);
        }
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;