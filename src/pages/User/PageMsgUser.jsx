import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { newshipmentSuccess, offerAccepted } from "../../actions/offer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "../../styles/Home.module.css";

const PageMsgUser = () => {
  const { noti } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offerAccepted(false));
    dispatch(newshipmentSuccess(false));
  }, [dispatch]);

  if (noti === "finishnewShipment") {
    return (
      <>
        <div
          className={styles.backHome + " row d-flex justify-content-evenly "}
        >
          <NavigationBar />
          <div className="col-lg-12 d-flex justify-content-center ps-0">
            <div className={styles.cardHome}>
              <div className="my-2">
                <div className="d-flex justify-content-center align-items-center">
                  <h1>Notificación</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <span>Solicitud registrada con exito.</span>
                </div>
                <div className="mt-4 d-flex justify-content-center align-items-center">
                  <Link to="/home" className={styles.btnLink}>
                    Volver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (noti === "offerAccepted") {
    return (
      <>
        <div
          className={styles.backHome + " row d-flex justify-content-evenly "}
        >
          <NavigationBar />
          <div className="col-lg-12 d-flex justify-content-center ps-0">
            <div className={styles.cardHome}>
              <div className="my-2">
                <div className="d-flex justify-content-center align-items-center">
                  <h1>Notificación</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <span>Oferta aceptada con exito.</span>
                </div>
                <div className="mt-4 d-flex justify-content-center align-items-center">
                  <Link to="/home" className={styles.btnLink}>
                    Volver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PageMsgUser;
