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
        <div className="col-lg-12 d-flex justify-content-center ps-0">
          <div className={styles.cardHome}>
            <div className="m-2">
              <h1>Bienvenido a FleteRos</h1>
            </div>
            <div className="m-2">
              <span style={{ fontSize: "20px" }}>
                En nuestra pagina podras buscar y ver tus solicitudes de
                transporte. Para empezar, podras ver las funciones disponibles
                en el menu.
                {/* En nuestra pagina podras pedir y ver tus solicitudes de
                transporte. Para empezar, podras ver las funciones disponibles
                en el menu. */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDriver;
