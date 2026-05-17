import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import Login from './pages/Login';
import Story from './pages/History'
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './components/Protectedroute';
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { getSessionId } from "./utils/session";

// ✅ FIXED: Import from AuthProvider.jsx, not AuthContext.js
import { AuthProvider } from "./context/AuthProvider"; 


function App() {
  useEffect(() => {
  const trackVisit = async () => {
    const sessionId = getSessionId();

    // 🔥 Check if this session already exists
    const { data } = await supabase
      .from("visits")
      .select("id")
      .eq("session_id", sessionId)
      .maybeSingle();

    if (!data) {
      await supabase.from("visits").insert({
        session_id: sessionId,
        user_agent: navigator.userAgent,
      });
    }
  };

  trackVisit();
}, []);
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Story" element={<Story />} />

          {/* Protected Pages */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
