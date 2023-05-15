import React from "react";
import image from "../images/logoBlue.png";

const LoadingGlobal = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "white" }}
    >
      <img
        src={image}
        alt=""
        width={"50%"}
        style={{ position: "absolute", top: "30%", minWidth: "250px" }}
      />
    </div>
  );
};

export default LoadingGlobal;
