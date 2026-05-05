import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { getSessionId } from "./utils/session";

// ✅ FIXED: Import from AuthProvider.jsx, not AuthContext.js
import { AuthProvider } from "./context/AuthProvider"; 


function App() {
  useEffect(() => {
    const trackVisit = async () => {
      const sessionId = getSessionId();
      await supabase.from("visits").insert({
        session_id: sessionId,
        user_agent: navigator.userAgent,
      });
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
