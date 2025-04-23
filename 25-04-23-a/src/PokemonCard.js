import React from "react";
import "./PokemonCard.css";

function PokemonCard(props) {
  return (
    <div className="container">
      <img src={props.image} width={"200px"}></img>
      <p>Name: {props.Name}</p>
      <p>Gewicht: {props.Gewicht}</p>
      <p>Größe: {props.Groesse}</p>
      <p>Typ:{props.Typ}</p>
    </div>
  );
}

export default PokemonCard;
