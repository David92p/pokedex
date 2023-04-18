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

  useEffect(() => {
    const sourceElement = document.getElementById("badge-color");
    const sourceBgColor = window
      .getComputedStyle(sourceElement)
      .getPropertyValue("background-color");
    const rgbArray = sourceBgColor.match(/\d+/g);
    const rgbaBgColor = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, 0.3)`;
    const targetElement = document.getElementById("container-main");
    targetElement.style.backgroundColor = rgbaBgColor;
  }, []);

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
              return (
                <span className={`badge ${type}`} id="badge-color">
                  {type}
                </span>
              );
            })}
          </div>
          <div className="container-stats">
            <BarChart stats={pokemonStats}></BarChart>
          </div>
        </div>
      </div>
      <div className="footer-card">
        <div className="container-ability">
          <h2> Ability</h2>
          <div>
            {ability.map((ability) => {
              return <div className={`badge ${types[0]}`}>{ability}</div>;
            })}
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
