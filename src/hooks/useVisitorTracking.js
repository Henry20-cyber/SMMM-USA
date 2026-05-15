import { useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';
import useAuth from './useAuth';
import useAdmin from './useAdmin';

export function useVisitorTracking() {
  const { user } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();

  // Generate or retrieve session ID
  const getSessionId = () => {
    let id = sessionStorage.getItem('visitor_session_id');
    if (!id) {
      id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${user?.id || 'guest'}`;
      sessionStorage.setItem('visitor_session_id', id);
    }
    return id;
  };

  // Track visitor
  const trackVisitor = async () => {
    // Don't track if we're still checking admin status
    if (adminLoading) return;
    
    // Don't track admin users
    if (isAdmin) {
      console.log('Admin detected - not tracking as visitor');
      return;
    }

    try {
      const sessionId = getSessionId();
      const today = new Date().toISOString().split('T')[0];

      // Check if already tracked today
      const { data: existing, error: checkError } = await supabase
        .from('visitor_logs')
        .select('id')
        .eq('session_id', sessionId)
        .eq('visit_date', today)
        .maybeSingle();

      if (checkError) throw checkError;

      // Only track if not already tracked today
      if (!existing) {
        // Get IP address (optional)
        let ipAddress = null;
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();
          ipAddress = ipData.ip;
        } catch (error) {
          console.log('Could not fetch IP:', error);
        }

        const { error: insertError } = await supabase
          .from('visitor_logs')
          .insert({
            session_id: sessionId,
            user_id: user?.id || null,
            ip_address: ipAddress,
            user_agent: navigator.userAgent,
            is_admin: false, // Already confirmed not admin
            visit_date: today,
            visited_at: new Date().toISOString(),
            page_visited: window.location.pathname
          });

        if (insertError) throw insertError;
        
        console.log('Visitor tracked successfully');
      }
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  useEffect(() => {
    // Wait for auth to be ready before tracking
    if (!adminLoading) {
      trackVisitor();
    }
  }, [user, isAdmin, adminLoading]);
}