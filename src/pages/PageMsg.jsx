import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { logSuccess } from "../actions/auth";
import styles from "../styles/Login.module.css";

const PageMsg = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logSuccess(false));
  }, [dispatch]);

  if (type === "registrationuser") {
    return (
      <div>
        <section className={styles.card404}>
          <div className={styles.form}>
            <h1>Notificación</h1>
            <span>Te has registrado con exito como usuario.</span>
            <div className="mt-4">
              <Link to="/login" className={styles.btnLink}>
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (type === "registrationdriver") {
    return (
      <div>
        <section className={styles.card404}>
          <div className={styles.form}>
            <h1>Notificación</h1>
            <span>Te has registrado con exito como conductor.</span>
            <div className="mt-4">
              <Link to="/login/driver" className={styles.btnLink}>
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default PageMsg;
