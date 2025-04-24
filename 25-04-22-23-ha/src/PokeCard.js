import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

function PokeCard(props) {
  return (
    <div className="listing">
      <Link style={{ textDecoration: "none" }} to={`/pokedex/${props.id}`}>
        <img src={props.image} height={"200px"}></img>
      </Link>
      <h2>{props.Name}</h2>
      <p>
        <b>Typ: {props.Typ}</b> / Größe: {props.Groesse} / Gewicht:{" "}
        {props.Gewicht}
      </p>
    </div>
  );
}

export default PokeCard;
