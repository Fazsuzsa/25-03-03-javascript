import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import PokeCard from "./PokeCard";
import { Link } from "react-router-dom";
import "./App.css";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [anzahl, setAnzahl] = useState(10);

  useEffect(() => {
    const urlListe = [];
    async function getPokemons() {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
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
    <>
      <Nav></Nav>
      <div className="contentContainer">
        {pokemons.slice(0, anzahl).map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            Name={pokemon.name}
            Gewicht={pokemon.weight}
            Groesse={pokemon.height}
            Typ={pokemon.types[0].type.name}
          ></PokeCard>
        ))}
      </div>
      <div className="button">
        <button onClick={() => setAnzahl(anzahl + 10)}>Mehr anzeigen</button>
      </div>
    </>
  );
}

export default Pokemon;
