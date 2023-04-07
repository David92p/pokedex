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
        backgroundColor: [
          "#e74c3c",
          "#f39c12",
          "#f4d03f",
          "#2ecc71",
          "#3498db",
          "#8e44ad",
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
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
        <div className="container-ability">
          <h2 style={{ border: "1px solid red" }}> Ability</h2>
          <div style={{ border: "1px solid blue" }}>
            {ability.map((el) => {})}
            {/* <h3 className={`badge ${type}`}>{el}</h3> */}
          </div>
        </div>
        <div className="container-weight">
          <div className="weight">Weight: {weight} Kg</div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
