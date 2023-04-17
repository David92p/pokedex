import React from "react";

import PokemonCard from "./PokemonCard";

const Main = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className={`container-main ${pokemon.types[0]}`}>
      <div className="container-card">
        <PokemonCard {...pokemon} key={pokemon.id}></PokemonCard>
      </div>
    </div>
  );
};

export default Main;
