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
    return <Navigate to="../home/driver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBar />
        <div className="col-lg-12 d-flex justify-content-center ps-0">
          <div className={styles.cardHome}>
            <div className="m-2">
              <h1>Bienvenido a FleteRos</h1>
            </div>
            <div className="m-2">
              <span style={{ fontSize: "20px" }}>
                En nuestra pagina podras pedir y ver tus solicitudes de
                transporte. Para empezar, podras ver las funciones disponibles
                en el menu.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
