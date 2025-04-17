import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let startZahl = 10;
  const [zahl, setZahl] = useState(startZahl);
  function reset() {
    setZahl(startZahl);
  }

  let initialColour = "wheat";
  const [colour, setColour] = useState(initialColour);
  function changeToInitial() {
    setColour(initialColour);
  }

  useEffect(() => {
    console.log("Hallo, ich komme aus dem UseEffect!");
  }, []);

  return (
    <>
      <p>Meine Lieblingszahl ist: {zahl}.</p>
      <button onClick={() => setZahl(zahl + 1)}>+</button>
      <button onClick={() => setZahl(zahl - 1)}>-</button>
      <button onClick={reset}>R</button>

      <h1 style={{ color: colour }}>Ich bin eine Überschrift</h1>
      <button onClick={() => setColour("purple")}>
        Ändere die Farbe zu lila
      </button>
      <button onClick={changeToInitial}>Ändere die Farbe zurück</button>
    </>
  );
}

export default App;
