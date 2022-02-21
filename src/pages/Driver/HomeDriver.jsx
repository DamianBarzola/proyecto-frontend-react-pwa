import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";

const HomeDriver = () => {
  document.title = "Fleteros - Home";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
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

export default HomeDriver;
