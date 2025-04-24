import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import "./Listing.css";

function PokeDex() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    async function getPokemonDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    }
    getPokemonDetails();
  }, []);

  if (!pokemon) {
    return <p></p>;
  }

  return (
    <>
      <Nav></Nav>
      <div className="contentContainer">
        <div className="listing">
          <img src={pokemon.sprites.front_default} height="200px"></img>
          <h2>{pokemon.name}</h2>
          <p>ID: {pokemon.id}</p>
          <p>Typ: {pokemon.types[0].type.name}</p>
          <p>Größe: {pokemon.height}</p>
          <p>Gewicht: {pokemon.weight}</p>
        </div>
      </div>
    </>
  );
}

export default PokeDex;
