import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhvsqjaidnxcoevkopmu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodnNxamFpZG54Y29ldmtvcG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NTIzNTUsImV4cCI6MjA5MzIyODM1NX0.7h8CjWgT06jCsyjtCSUhw9RQF4T-thtLt0waP27QQvM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);