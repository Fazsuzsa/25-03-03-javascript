import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {tiere.map((tier) => (
        <Listing
          key={house.id}
          name={house.name}
          preis={house.preis}
          image={house.image}
          active={house.active}
        ></Listing>
      ))}
    </div>
  );
}

export default App;
