import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let initialColour = "darkolivegreen";
  const [colour, setColour] = useState(initialColour);
  function changeToInitial() {
    setColour(initialColour);
  }

  const [counter, setCount] = useState(0);
  function clickCount() {
    setCount(counter + 1);
  }

  useEffect(() => {
    console.log("Hallo, ich komme aus dem UseEffect!");
  }, []);
  return (
    <>
      <h1 style={{ backgroundColor: colour }}>Hausaufgabe 16.04.2025</h1>
      <button onClick={() => setColour("purple")}>
        Ändere die Farbe zu lila
      </button>
      <button onClick={changeToInitial}>Ändere die Farbe zurück</button>
      <br />
      <button onClick={clickCount}>Du hast {counter}-mal geklickt!</button>
    </>
  );
}

export default App;
