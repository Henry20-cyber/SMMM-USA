import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase/supabaseClient';
import useAdmin from './useAdmin';

export function useVisitorStats() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAdmin();

  // Wrap fetchVisitorStats in useCallback to prevent recreation
  const fetchVisitorStats = useCallback(async () => {
    // Only admins can fetch visitor stats
    if (!isAdmin) {
      setLoading(false);
      return;
    }

    try {
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      // Get today's unique visitors (non-admin)
      const { count: todayCount, error: todayError } = await supabase
        .from('visitor_logs')
        .select('*', { count: 'exact', head: true })
        .eq('visit_date', today)
        .eq('is_admin', false);

      if (todayError) throw todayError;

      // Get total unique visitors (all time, non-admin)
      const { data: allVisitors, error: allError } = await supabase
        .from('visitor_logs')
        .select('session_id')
        .eq('is_admin', false);

      if (allError) throw allError;

      const uniqueSessions = new Set(allVisitors?.map(v => v.session_id) || []);
      
      // Get yesterday's visitors for comparison
      const { count: yesterdayCount, error: yesterdayError } = await supabase
        .from('visitor_logs')
        .select('*', { count: 'exact', head: true })
        .eq('visit_date', yesterday)
        .eq('is_admin', false);

      if (yesterdayError) throw yesterdayError;

      // Calculate percentage change
      let change = 0;
      if (yesterdayCount && yesterdayCount > 0) {
        change = ((todayCount - yesterdayCount) / yesterdayCount) * 100;
      } else if (todayCount > 0) {
        change = 100; // 100% increase if no visitors yesterday
      }

      setTodayVisitors(todayCount || 0);
      setUniqueVisitors(uniqueSessions.size);
      setPercentageChange(Math.round(change));
    } catch (error) {
      console.error('Error fetching visitor stats:', error);
    } finally {
      setLoading(false);
    }
  }, [isAdmin]); // Add isAdmin as dependency

  useEffect(() => {
    if (isAdmin) {
      // Call the async function
      fetchVisitorStats();
      
      // Refresh stats every minute
      const interval = setInterval(() => {
        fetchVisitorStats();
      }, 60000);
      
      return () => clearInterval(interval);
    }
  }, [isAdmin, fetchVisitorStats]); // Add fetchVisitorStats to dependencies

  return { 
    uniqueVisitors, 
    todayVisitors, 
    percentageChange, 
    loading, 
    refresh: fetchVisitorStats 
  };
}