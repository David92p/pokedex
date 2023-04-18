import React from "react";
import loading from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className="container-loading-error">
      <img src={loading} alt="Loading" />
      <h1>Loading</h1>
      <h2>We are trying to catch your Pokemon...</h2>
    </div>
  );
};

export default Loading;
