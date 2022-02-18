import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "../../styles/Home.module.css";

const Home = () => {
  document.title = "Fleteros - Home";
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);

  if (driver) {
    return <Navigate to="../homedriver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBar />
        <div className="col-lg-7 ">
          <div className={styles.card}>
            <h1>Algo</h1>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styles.card}>
            <h1>Algo</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
