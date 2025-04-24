import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const urlListe = [];
    async function getPokemons() {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      const data = await res.json();
      data.results.forEach((element) => {
        urlListe.push(element.url);
      });

      Promise.all(
        urlListe.map((url) => fetch(url).then((res) => res.json()))
      ).then((data) => setPokemons(data));
    }
    getPokemons();
  }, []);

  return (
    <div className="containerList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon.sprites.front_default}
          Name={pokemon.name}
          Gewicht={pokemon.weight}
          Groesse={pokemon.height}
          Typ={pokemon.types[0].type.name}
        ></PokemonCard>
      ))}
    </div>
  );
}

export default PokemonList;
