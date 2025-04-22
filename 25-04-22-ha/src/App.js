import logo from "./logo.svg";
import "./App.css";
import Listing from "./Listing";

function App() {
  const days = [
    {
      id: 1,
      name: "Thethi - Valbona",
      laenge: 17.6,
      oben: 1220,
      unten: 1040,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 2,
      name: "Valbona - Cerem",
      laenge: 10.7,
      oben: 670,
      unten: 410,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 3,
      name: "Cerem - Doberdol",
      laenge: 16.5,
      oben: 1290,
      unten: 680,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 4,
      name: "Doberdol - Milishevc",
      laenge: 18.5,
      oben: 1060,
      unten: 1180,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 5,
      name: "Milishevc - Reke e Allages",
      laenge: 15.7,
      oben: 970,
      unten: 1360,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 6,
      name: "Reke e Allages - Guri i Kuq",
      laenge: 23.0,
      oben: 1420,
      unten: 1310,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 7,
      name: "Guri i Kuq - Babino Polje",
      laenge: 15.6,
      oben: 1220,
      unten: 1120,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 8,
      name: "Babino Polje - Plav",
      laenge: 20.9,
      oben: 800,
      unten: 1350,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 9,
      name: "Plav - Vusanje",
      laenge: 21.5,
      oben: 1250,
      unten: 1180,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
    {
      id: 10,
      name: "Vusanje - Thethi",
      laenge: 21.3,
      oben: 1150,
      unten: 1400,
      image: "https://ychef.files.bbci.co.uk/1280x720/p0dr77tx.jpg",
    },
  ];
  return (
    <div className="contentContainer">
      <nav></nav>
      {days.map((day) => (
        <Listing
          key={day.id}
          name={day.name}
          laenge={day.laenge}
          oben={day.oben}
          unten={day.unten}
          image={day.image}
        ></Listing>
      ))}
    </div>
  );
}

export default App;
