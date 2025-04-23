import { Link } from "react-router-dom";
import "./Listing.css";

function Listing(props) {
  let isAdmin = true;
  let satz = "";
  if (isAdmin) {
    satz = "Hallo Admin";
  } else {
    satz = "Du bist kein Admin";
  }

  return (
    <div className="listing-tile">
      <img width="300px" src={props.image}></img>
      <h2>{props.name}</h2>
      <h3>{props.preis} €</h3>
      <Link to="/contact">Leite mich weiter auf die Kontakt Seite</Link>
      {props.active ? (
        <h4 style={{ color: "green" }}>verfügbar</h4>
      ) : (
        <h4 style={{ color: "red" }}>nicht verfügbar</h4>
      )}
      {isAdmin && <button>Delete</button>}
      {isAdmin && <p>{satz}</p>}
    </div>
  );
}

export default Listing;
