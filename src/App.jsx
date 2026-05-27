import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import Login from './pages/Login';
import History from './pages/History';
import Apostolate from './pages/Apostolate';
import Charism from './pages/Charism';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './components/Protectedroute';
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { getSessionId } from "./utils/session";

// ✅ FIXED: Import from AuthProvider.jsx, not AuthContext.js
import { AuthProvider } from "./context/AuthProvider"; 
import Sacredsymbols from './pages/Sacredsymbols';


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
          <Route path="/History" element={<History />} />
          <Route path="/Charism" element={<Charism />} />
          <Route path="/Apostolate" element={<Apostolate />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/Sacredsymbols" element={<Sacredsymbols />} />
          <Route path="/Contact" element={<Contact />} />

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
