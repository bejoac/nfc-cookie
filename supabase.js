import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const apiKey = "sb_publishable_bXebsEh1ej_K2vyh73HU1w_SApkXdVi";
const url = "https://bovhjfcmyuqdunylkzdq.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(url, apiKey);

const { data, error } = await supabase.rpc('get_random_item');

if (data) {
  console.log(data);
} else {
  console.log("Error: ", error);
};

// Do I need try catch?