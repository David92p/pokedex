import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";

const PokemonCard = (pokemon) => {
  const { name, number, img, weight, ability, stats, types } = pokemon;

  let labels = [];
  let data = [];
  stats.forEach((el) => {
    for (const [key, value] of Object.entries(el)) {
      labels.push(key);
      data.push(value);
    }
  });

  const [pokemonStats, setPokemonStats] = useState({
    labels: labels,
    datasets: [
      {
        label: "Statistics",
        data: data,
      },
    ],
  });

  return (
    <>
      <div className="header-card">
        <h1>
          {name} N° {number}
        </h1>
      </div>
      <div className="main-card">
        <div className="container-img">
          <img src={img} alt={name} />
        </div>
        <div className="container-description">
          <div className="container-badge">
            {types.map((type) => {
              return <span className={`badge ${type}`}>{type}</span>;
            })}
          </div>
          <div className="container-stats">
            <BarChart stats={pokemonStats}></BarChart>
          </div>
        </div>
      </div>
      <div className="footer-card">
        ability {ability} weight{weight}
      </div>
    </>
  );
};

export default PokemonCard;
