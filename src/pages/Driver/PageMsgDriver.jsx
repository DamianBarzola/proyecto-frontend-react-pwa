import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { offerCreated } from "../../actions/offer";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
const PageMsgDriver = () => {
  const { noti } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offerCreated(false));
  }, [dispatch]);

  if (noti === "offerCreated") {
    return (
      <>
        <div
          className={styles.backHome + " row d-flex justify-content-evenly "}
        >
          <NavigationBarDriver />
          <div className="col-lg-12 d-flex justify-content-center ps-0">
            <div className={styles.cardHome}>
              <div className="my-2">
                <div className="d-flex justify-content-center align-items-center">
                  <h1>Notificación</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <span>Oferta creada con exito.</span>
                </div>
                <div className="mt-4 d-flex justify-content-center align-items-center">
                  <Link to="/home/driver" className={styles.btnLink}>
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

export default PageMsgDriver;
