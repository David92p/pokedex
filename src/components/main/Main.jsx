import React from "react";

import PokemonCard from "./PokemonCard";

const Main = ({ pokemon }) => {
  return (
    <div className="container-main">
      <div className="container-card">
        <PokemonCard {...pokemon} key={pokemon.id}></PokemonCard>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
