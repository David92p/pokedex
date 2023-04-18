import React from "react";

import img from "../../assets/error.jpg";

const ErrorMain = () => {
  return (
    <div className="container-loading-error">
      <img src={img} alt="errore" />
      <h1>Oops ... Something went wrong</h1>
      <h2>Try again ...</h2>
    </div>
  );
};

export default ErrorMain;
