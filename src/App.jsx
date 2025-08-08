import { createClient } from '@supabase/supabase-js'
import "./App.css";

function App() {
  const supabaseClient = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  console.log(supabaseClient);

  return (
    <>
      <h2 className="heading">"Vertraue auf deine Intuition; sie wird dich führen."</h2>
    </>
  );
}

export default App;
