import { Link } from "react-router-dom";
import "./Listing.css";

function Listing(props) {
  return (
    <div className="listing-tile">
      <img width="300px" src={props.image}></img>
      <h2>{props.name}</h2>
      <h3>{props.preis} €</h3>
      <Link to="/contact">Leite mich weiter auf die Kontakt Seite</Link>
    </div>
  );
}

export default Listing;
