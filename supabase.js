import { createClient } from '@supabase/supabase-js'

const apiKey = "sb_publishable_bXebsEh1ej_K2vyh73HU1w_SApkXdVi";
const url = "https://bovhjfcmyuqdunylkzdq.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(url, apiKey);

const { data, error} = await supabase.from("fortune-cookie-sayings").select('*');

if (error) {
  console.log("Error: ", error);
} else {
  console.log("Sucess: ", data);
};