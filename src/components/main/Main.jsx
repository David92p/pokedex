import React, { useEffect } from "react";

import { useState } from "react";
import PokemonCard from "./PokemonCard";

const Main = () => {
  const [pokemon, setPokemon] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const parsePokemon = (pokemon) => {
    //console.log(pokemon);
    let namePokemon =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    let numberPokemon = "";
    switch (pokemon.id.toString().length) {
      case 1:
        numberPokemon = "000" + pokemon.id.toString();
        break;
      case 2:
        numberPokemon = "00" + pokemon.id.toString();
        break;
      case 3:
        numberPokemon = "0" + pokemon.id.toString();
        break;
      case 4:
        numberPokemon = pokemon.id.toString();
        break;
      default:
        numberPokemon = "N/A";
    }
    const pokemonCard = {
      id: pokemon.id,
      name: namePokemon,
      number: numberPokemon,
      img: pokemon.sprites.front_default,
      weight: pokemon.weight,
      types: [],
      ability: [],
      stats: [],
    };
    pokemonCard.ability = pokemon.abilities.map((elem) => elem.ability.name);
    pokemonCard.types = pokemon.types.map((elem) => elem.type.name);
    pokemon.stats.forEach((el) => {
      const stat = {};
      stat[el.stat.name] = el.base_stat;
      pokemonCard.stats.push(stat);
    });
    return pokemonCard;
  };

  //   const fetchPokemon = async (id = Math.floor(Math.random() * 1008)) => {
  //     setIsLoading(true);
  //     setIsError(false);
  //     try {
  //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //       if (!response.ok) {
  //         const msg = `There was an error ${response.status} ${response.statusText}`;
  //         throw new Error(msg);
  //       }
  //       const data = await response.json();
  //       setIsLoading(false);
  //       return data;
  //     } catch (error) {
  //       setIsLoading(false);
  //       setIsError(true);
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    const index = Math.floor(Math.random() * 1008);
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemon = parsePokemon(data);
        setPokemon(pokemon);
        setIsLoading(false);
      });
    // return () => {
    //   setPokemon({});
    // };
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////

  if (isLoading) {
    console.log("siamo nel loading");
    return (
      <div className="container-main">
        <h1>is Loading .......</h1>;
      </div>
    );
  } else if (isError) {
    console.log("siamo nellerror");
    return (
      <div className="container-main">
        <h1>IS FAILLED</h1>;
      </div>
    );
  } else {
    console.log("stiamo randerizzando il pokemon in else");
    return (
      <div className="container-main">
        <div className="container-card">
          {pokemon && <PokemonCard {...pokemon} key={pokemon.id} />}
        </div>
        <div></div>
      </div>
    );
  }
};

export default Main;
