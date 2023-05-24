import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readDriverData, resendEmailDriver, errorMsg} from "../../actions/auth";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";

const HomeDriver = () => {
  document.title = "Fleteros - Home";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(errorMsg(""))
    dispatch(resendEmailDriver(driver.driver.email));
  };
  const msg = useSelector((state) => state.auth.msg);

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

            {!driver.driver.isVerified && (
            <div className="m-2">
              <h3>Driver requiere verifiacion de correo</h3>
                <p >Revisa tu correo electronico para poder confirmar tu Email. </p>
                <p> En caso de que el link no funcione haz click en el boton</p>
                <button className="btn btn-primary " onClick={handleSubmit}>
                  Reenviar Email
                </button>
                <div className="my-3">
                {msg && (
                    <span
                      style={{
                        color: "red",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      {msg}
                    </span>
                  )}
                  {!msg && (
                    <span>Email reenviado correctamente.</span>
                  )}
                </div>

            </div>
            )}

          </div>
          </div>
          <div className="row" >
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"color": "white"}}>

            Viajes
          </div>
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"height": "100px", "marginTop": "-60px"}}>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultima semana<br></br>
                  {driverAnalytics ? (driverAnalytics.shipments_last_week) : ( 0 )}
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
            <div className={styles.cardHomeDriver}>
                <div className="m-1">
                Ultimo mes<br></br>
              {driverAnalytics ? (driverAnalytics.shipments_last_month) : ( 0 )}
            </div>
          </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultimos 3 meses<br></br>
                  {driverAnalytics ? (driverAnalytics.shipments_last_3_months) : ( 0 )}
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="row">
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"color": "white"}}>
            Ganancias

            </div>
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"height": "100px", "marginTop": "-60px"}}>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1">
                  Ultima semana<br></br>
                  {driverAnalytics ? (driverAnalytics.profit_last_week) : ( 0 )}
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
            <div className={styles.cardHomeDriver}>
                <div className="m-1">
                Ultimo mes<br></br>
              {driverAnalytics ? (driverAnalytics.profit_last_month) : ( 0 )}
            </div>
          </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center ps-0">
              <div className={styles.cardHomeDriver}>
                <div className="m-1 text-center">
                  Ultimos 3 meses<br></br>
                  {driverAnalytics ? (driverAnalytics.profit_last_3_months) : ( 0 )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"color": "white"}}>
           Estadisticas
          </div>
          <div className="col-lg-12 d-flex justify-content-center ps-0" style={{"height": "100px"}}>
        <div className="col-lg-3 d-flex justify-content-center ps-0">
          <div className={styles.cardHomeDriver}>
            <div className="m-1">
              Puntaje<br></br>
              {driverAnalytics ? (driverAnalytics.average_rate) : ( 0 )}
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center ps-0">
        <div className={styles.cardHomeDriver}>
            <div className="m-1">
            Distancia<br></br>
          {driverAnalytics ? ( driverAnalytics.total_distance) : ( 0 )}
        </div>
      </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center ps-0">
          <div className={styles.cardHomeDriver}>
            <div className="m-1">
              Duracion<br></br>
              {driverAnalytics ? (driverAnalytics.total_duration) : ( 0 )}
            </div>
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
