import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const apiKey = "sb_publishable_bXebsEh1ej_K2vyh73HU1w_SApkXdVi";
const url = "https://bovhjfcmyuqdunylkzdq.supabase.co";
const supabase = createClient(url, apiKey);

async function loadData() {
  try {
    const { data, error } = await supabase.rpc('get_random_item');

    if (error) {
      console.log("Supabase Error: ", error);
      return;
    };

    document.getElementById("main-container").innerHTML = data.saying;
  } catch (error) {
    console.log("Browser API-Call Error: ", error)
  };
};

loadData();