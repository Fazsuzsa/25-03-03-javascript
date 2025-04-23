import logo from "./logo.svg";
import "./App.css";
import Listing from "./Listing";
import { useState } from "react";

function App() {
  const [anzahl, setAnzahl] = useState(1);
  const houses = [
    {
      id: 1,
      name: "Mein erstes Haus",
      preis: "350.000",
      image:
        "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg",
      active: true,
    },
    {
      id: 2,
      name: "Mein zweites Haus",
      preis: "125.000",
      image:
        "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg",
      active: false,
    },
    {
      id: 3,
      name: "Mein drittes Haus",
      preis: "100.000",
      image:
        "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg",
      active: true,
    },
  ];
  return (
    <div className="houseContainer">
      {houses.slice(0, anzahl).map((house) => (
        <Listing
          key={house.id}
          name={house.name}
          preis={house.preis}
          image={house.image}
          active={house.active}
        ></Listing>
      ))}
      <button onClick={() => setAnzahl(anzahl + 1)}>Mehr anzeigen</button>
    </div>
  );
}

export default App;
