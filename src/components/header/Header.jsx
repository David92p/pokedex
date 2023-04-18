import React from "react";

const Header = ({ inputValue, handleInputChange, handleBtnClick }) => {
  return (
    <div className="container-header">
      <div className="input-container">
        <input
          type="text"
          className="text-input"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Name Pokemon ..."
        />
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => handleBtnClick(inputValue)}>
          Research
        </button>
      </div>
    </div>
  );
};

export default Header;
