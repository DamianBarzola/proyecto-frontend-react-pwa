import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  document.title = "Fleteros - Home";
  return (
    <div className={styles.backHome + " row"}>
      <div className="col-12">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
