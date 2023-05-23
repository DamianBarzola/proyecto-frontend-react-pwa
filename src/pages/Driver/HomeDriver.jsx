import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readDriverData} from "../../actions/auth";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";

const HomeDriver = () => {
  document.title = "Fleteros - Home";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  
  const driverAnalytics = useSelector((state) => state.auth.driverAnalytics);

  useEffect(() => {
    dispatch(readDriverData());
  }, [dispatch]);


  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
    {console.log(driverAnalytics)}
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
        <div className="row">
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
              </span>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-12 d-flex justify-content-center ps-0">
          <div className="col-lg-1 d-flex justify-content-center ps-0">

            Viajes
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultima semana<br></br>
                  {driverAnalytics.shipments_last_week}
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
            <div className={styles.cardHomeDriver}>
                <div className="m-1">
                Ultimo mes<br></br>
              {driverAnalytics.shipments_last_month}
            </div>
          </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultimos 3 meses<br></br>
                  {driverAnalytics.shipments_last_3_months}
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="row">
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"height": "30px"}}>
          <div className="col-lg-1 d-flex justify-content-center ps-0">

            Ganancias
</div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultima semana<br></br>
                  {driverAnalytics.profit_last_week}
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
            <div className={styles.cardHomeDriver}>
                <div className="m-1">
                Ultimo mes<br></br>
              {driverAnalytics.profit_last_month}
            </div>
          </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultimos 3 meses<br></br>
                  {driverAnalytics.profit_last_3_months}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center ps-0">
          <div className="col-lg-1 d-flex justify-content-center ps-0">
           Estadisticas

          </div>

        <div className="col-lg-3 d-flex justify-content-center ps-0">
          <div className={styles.cardHomeDriver}>
            <div className="m-1">
              Puntaje<br></br>
              {driverAnalytics.average_rate}
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center ps-0">
        <div className={styles.cardHomeDriver}>
            <div className="m-1">
            Distancia<br></br>
          {driverAnalytics.total_distance}
        </div>
      </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center ps-0">
          <div className={styles.cardHomeDriver}>
            <div className="m-1">
              Duracion<br></br>
              {driverAnalytics.total_duration}
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDriver;
