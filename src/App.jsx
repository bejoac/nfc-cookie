import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
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
        setTimeout(() => {
          setText(data);
        }, 2450);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="saying-container">
        {text && text.length > 0 ? <h2>{text[0]["text"]}</h2> : <LoadingComponent />}
    </div>
  );
}

export default App;
