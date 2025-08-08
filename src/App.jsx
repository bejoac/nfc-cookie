import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import "./App.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("random_sayings")
        .select("text")
        .limit(1);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setText(data);
      }
    }

    fetchData();
  }, []);

  if (text) {
    console.log(text[0]["text"]);
  }

  return (
    <>
      <h2 className="heading">
        {text && text.length > 0 ? text[0]["text"] : "Checking the future 🔮..."}
      </h2>
    </>
  );
}

export default App;
