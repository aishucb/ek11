import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
