import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  return (
    <>
      <h1>Toni+</h1>
      <h2>"Vertraue auf deine Intuition; sie wird dich führen."</h2>
    </>
  );
}

export default App;
