import { createClient } from 'npm:@supabase/supabase-js@2'


import "./App.css";

function App() {
  const supabaseClient = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  console.log(supabaseClient);

  return (
    <>
      <h1>👅</h1>
      <h2>"Vertraue auf deine Intuition; sie wird dich führen."</h2>
    </>
  );
}

export default App;
