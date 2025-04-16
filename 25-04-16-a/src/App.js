import logo from "./logo.svg";
import "./App.css";

function App() {
  const zahl = 15;
  const name = "Suheib";
  const element = <h3>Hallo aus dem H3 Tag</h3>;
  const meinStil = { backgroundColor: "blue", fontSize: "30px" };
  function addieren(a, b) {
    return a + b;
  }
  return (
    // <> ... </> Fragment
    <>
      {/* Attribute werden in camelCase Schreibweise geschrieben */}
      <h1 style={{ backgroundColor: "red" }}>
        Hier eine Berechnung {zahl * 5}
      </h1>
      <p>Hallo aus dem P tag</p>
      <h2 style={meinStil}>Hallo lieber {name}!</h2>
      {element}
      <h4>Hier eine Berechnung {addieren(5, 7)}</h4>
      <input type="number" placeholder="zahl1"></input>
      <input type="number" placeholder="zahl2"></input>
    </>
  );
}

export default App;
