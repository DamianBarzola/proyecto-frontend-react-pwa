import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { newshipmentSuccess, offerAccepted } from "../../actions/offer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "../../styles/Login.module.css";

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
        <NavigationBar />
        <div
          className={styles.backHome + " row d-flex justify-content-evenly "}
        >
          <div className="col-12 d-flex justify-content-center ps-0">
            <div>
              <section
                className={styles.card404}
                style={{ marginLeft: "200px" }}
              >
                <div className={styles.form}>
                  <h1>Notificación</h1>
                  <span>Solicitud registrada con exito.</span>
                  <div className="mt-4">
                    <Link to="/home" className={styles.btnLink}>
                      Volver
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (noti === "offerAccepted") {
    return (
      <>
        <NavigationBar />
        <div
          className={styles.backHome + " row d-flex justify-content-evenly "}
        >
          <div className="col-12 ">
            <div>
              <section
                className={styles.card404}
                style={{ marginLeft: "200px" }}
              >
                <div className={styles.form}>
                  <h1>Notificación</h1>
                  <span>Oferta aceptada con exito.</span>
                  <div className="mt-4">
                    <Link to="/home" className={styles.btnLink}>
                      Volver
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PageMsgUser;
