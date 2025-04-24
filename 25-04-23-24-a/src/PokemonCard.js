import React from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/pokedex/${props.id}`}>
      <div className="container">
        <img src={props.image} width={"200px"}></img>
        <p>Name: {props.Name}</p>
        <p>Gewicht: {props.Gewicht}</p>
        <p>Größe: {props.Groesse}</p>
        <p>Typ:{props.Typ}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;
