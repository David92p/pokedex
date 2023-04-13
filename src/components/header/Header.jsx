import React, { useState } from "react";

const Header = ({ dataInput }) => {
  const [namePokemon, setNamePokemon] = useState("");

  const inputValue = (e) => {
    setNamePokemon(e.target.value);
  };

  return (
    <div className="container-header">
      <input
        type="text"
        className="text-input"
        onChange={inputValue}
        //value={namePokemon}
      />
      <button className="btn" onClick={() => dataInput(namePokemon)}>
        Ricerca
      </button>
    </div>
  );
};

export default Header;
