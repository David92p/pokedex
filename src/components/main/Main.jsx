import React from "react";

import PokemonCard from "./PokemonCard";

const Main = ({ pokemon }) => {
  return (
    <div className={`container-main`} id="container-main">
      <div className="container-card">
        <PokemonCard {...pokemon} key={pokemon.id}></PokemonCard>
      </div>
    </div>
  );
};

export default Main;
