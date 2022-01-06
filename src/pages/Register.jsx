import React from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  document.title = "Fleteros - Crear Cuenta";
  return (
    <div>
      <section className={styles.cardLanding}>
        <div className={styles.form}>
          <h1>Crear Cuenta</h1>
          <div style={{ marginTop: "15px" }}>
            <Link
              to="/register/user"
              className={styles.btn}
              style={{ width: "60%", border: "2px solid" }}
            >
              Regístrate como usuario{" "}
            </Link>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Link
              to="/register/driver"
              className={styles.btn}
              style={{ width: "60%", border: "2px solid" }}
            >
              Regístrarte para hacer entregas
            </Link>
          </div>
          <hr />
          <span>
            Ya tienes cuenta?{" "}
            <Link to="/login" className={styles.btnLink}>
              Inicia Sesion
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Register;
