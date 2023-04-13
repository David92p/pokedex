import React, { useState } from "react";
import Main from "../main/Main";

const Header = () => {
  const [namePokemon, setNamePokemon] = useState(null);
  const [dataPokemon, setDataPokemon] = useState(null);

  const inputValue = (e) => {
    setNamePokemon(e.target.value);
  };

  const dataInput = async () => {
    // console.log(namePokemon);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );
      if (!response.ok) {
        const msg = `There was an error ${response.status} ${response.statusText}`;
        throw new Error(msg);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-header">
      <input type="text" className="text-input" onChange={inputValue} />
      <button className="btn" onClick={dataInput}>
        Ricerca
      </button>
    </div>
  );
};

export default Header;
