import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhvsqjaidnxcoevkopmu.supabase.co";
const supabaseAnonKey = " ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);