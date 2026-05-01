import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhvsqjaidnxcoevkopmu.supabase.co";
const supabaseAnonKey = "sb_publishable_EIzvsMbpB-2gemKcFzyZ4g_onYLNvHq";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);