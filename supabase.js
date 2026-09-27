const SUPABASE_URL = "https://kxefrrfyrlcheaqflapi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_k09LlIp2-nLpOFqcTnfLsA_WmEukyND";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("SUPABASE CONNECTED");

