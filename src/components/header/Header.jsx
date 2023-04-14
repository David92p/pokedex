import React, { useState } from "react";

const Header = ({ inputValue, handleInputChange, handleBtnClick }) => {
  return (
    <div className="container-header">
      <input
        type="text"
        className="text-input"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Name Pokemon ..."
      />
      <button className="btn" onClick={() => handleBtnClick(inputValue)}>
        Ricerca
      </button>
    </div>
  );
};

export default Header;
