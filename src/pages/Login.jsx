import React from "react";
import styles from "../styles/Login.module.css";
import inputTxt from "../styles/Input.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  document.title = "Fleteros - Inicio de Sesion";
  return (
    <div>
      <section className={styles.cardLanding}>
        <form className={styles.form}>
          <h1>Iniciar Sesion</h1>
          <div>
            <div className={inputTxt.form__div}>
              <input
                type="text"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                for=""
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Usuario
              </label>
            </div>
            <div className={inputTxt.form__div}>
              <input
                type="password"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                for=""
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Contraseña
              </label>
            </div>
            <button className={styles.btn}>Ingresar</button>
            <hr />
            <span>
              No tienes cuenta?{" "}
              <Link to="/register" className={styles.btnLink}>
                Regístrate
              </Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
