import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  readDriverData,
  resendEmailDriver,
  errorMsg,
} from "../../actions/auth";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import { TbBrandCitymapper } from "react-icons/tb";
import { FaPoll } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";

const HomeDriver = () => {
  document.title = "Fleteros - Home";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(errorMsg(""));
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
        <div className="row d-flex justify-content-center">
          {!driver.driver.isVerified && (
            <div className="col-11 d-flex justify-content-center mt-3">
              <div
                className={styles.normalCard}
                style={{ padding: "5px 20px" }}
              >
                <div className="m-2">
                  <h4>
                    <AiOutlineWarning size={"25px"} color="orange" /> Driver
                    requiere verifiacion de correo
                  </h4>
                  <p style={{ margin: "4px 0px" }}>
                    <i>
                      {" "}
                      Revisa tu correo electronico para poder confirmar tu
                      Email. En caso de que el link no funcione haz click en el
                      boton
                    </i>
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary " onClick={handleSubmit}>
                      Reenviar Email
                    </button>
                  </div>
                  {msg && (
                    <div className="my-2">
                      <span
                        style={{
                          color: "red",
                          letterSpacing: "1px",
                          fontSize: "16px",
                        }}
                      >
                        {msg}
                      </span>
                      {/* {!msg && <span>Email reenviado correctamente.</span>} */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="col-lg-8">
            <div className="row my-3">
              <div className="col-12 d-flex justify-content-center">
                <div className={styles.normalCard}>
                  <div className="m-2">
                    <h1>Bienvenido a FleteRos</h1>
                  </div>
                  <div className="m-2">
                    <span style={{ fontSize: "20px" }}>
                      En nuestra pagina podras buscar y ver tus solicitudes de
                      transporte. Para empezar, podras ver las funciones
                      disponibles en el menu.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-4 mb-3">
                <ul
                  className="list-group"
                  style={{
                    fontSize: "16px",
                    minWidth: "220px",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    className="list-group-item list-group-item-secondary d-flex justify-content-between  align-items-center only-dark-color"
                    style={{
                      textDecoration: "none",
                      borderRadius: "7px 7px 0px 0px",
                    }}
                  >
                    <div className="mb-0 mt-1  ">
                      <h5 className="m-0">
                        <b>Viajes</b>
                      </h5>
                    </div>
                    <div className="text-right">
                      <TbBrandCitymapper size={"20px"} />
                    </div>
                  </div>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Última semana</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics
                        ? driverAnalytics.shipments_last_week
                        : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Último mes</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics
                        ? driverAnalytics.shipments_last_month
                        : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{
                      padding: "0.5rem 0.5rem",
                      borderRadius: "0px 0px 7px 7px",
                    }}
                  >
                    <div className="col-9">Últimos 3 meses</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics
                        ? driverAnalytics.shipments_last_3_months
                        : 0}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-3">
                <ul
                  className="list-group"
                  style={{
                    fontSize: "16px",
                    minWidth: "220px",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    className="list-group-item list-group-item-secondary d-flex justify-content-between  align-items-center only-dark-color"
                    style={{
                      textDecoration: "none",
                      borderRadius: "7px 7px 0px 0px",
                    }}
                  >
                    <div className="mb-0 mt-1  ">
                      <h5 className="m-0">
                        <b>Ganancias</b>
                      </h5>
                    </div>
                    <div className="text-right">
                      <MdOutlineAttachMoney size={"20px"} />
                    </div>
                  </div>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Última semana</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics ? driverAnalytics.profit_last_week : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Último mes</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics ? driverAnalytics.profit_last_month : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{
                      padding: "0.5rem 0.5rem",
                      borderRadius: "0px 0px 7px 7px",
                    }}
                  >
                    <div className="col-9">Últimos 3 meses</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics
                        ? driverAnalytics.profit_last_3_months
                        : 0}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 ">
                <ul
                  className="list-group"
                  style={{
                    fontSize: "16px",
                    minWidth: "220px",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    className="list-group-item list-group-item-secondary d-flex justify-content-between  align-items-center only-dark-color"
                    style={{
                      textDecoration: "none",
                      borderRadius: "7px 7px 0px 0px",
                    }}
                  >
                    <div className="mb-0 mt-1  ">
                      <h5 className="m-0">
                        <b>Estadísticas</b>
                      </h5>
                    </div>
                    <div className="text-right">
                      <FaPoll size={"20px"} />
                    </div>
                  </div>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Puntaje</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics ? driverAnalytics.average_rate : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    <div className="col-9">Distancia</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics ? driverAnalytics.total_distance : 0}
                    </div>
                  </li>
                  <li
                    className="list-group-item  d-flex justify-content-between align-items-center only-dark-color m-0"
                    style={{
                      padding: "0.5rem 0.5rem",
                      borderRadius: "0px 0px 7px 7px",
                    }}
                  >
                    <div className="col-9">Duración</div>
                    <div className="col-3 d-flex justify-content-end">
                      {driverAnalytics ? driverAnalytics.total_duration : 0}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDriver;
