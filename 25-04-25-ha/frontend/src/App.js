import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function getAnimals() {
      const res = await fetch("http://localhost:5005/tiere");
      const data = await res.json();
      setAnimals(data);
    }
    getAnimals();
  }, []);

  return (
    <div>
      {animals.map((animal) => (
        <>
          <p>
            <b>{animal.name}</b>
          </p>
          <p>{animal.tierart}</p>
        </>
      ))}
    </div>
  );
}

export default App;
