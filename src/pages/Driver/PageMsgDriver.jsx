import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { offerCreated } from "../../actions/offer";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Login.module.css";

const PageMsgDriver = () => {
  const { noti } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offerCreated(false));
  }, [dispatch]);

  if (noti === "offerCreated") {
    return (
      <>
        <NavigationBarDriver />
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
                  <span>Oferta creada con exito.</span>
                  <div className="mt-4">
                    <Link to="/home/driver" className={styles.btnLink}>
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

export default PageMsgDriver;
