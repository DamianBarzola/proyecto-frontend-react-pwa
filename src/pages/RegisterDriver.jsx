import React from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import inputTxt from "../styles/Input.module.css";

const RegisterDriver = () => {
  document.title = "Fleteros - Crear Cuenta";
  return (
    <div>
      <section className={styles.cardLanding}>
        <form className={styles.form}>
          <h1>Crear Cuenta como Transportista</h1>
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
                Nombre
              </label>
            </div>
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
                Apellido
              </label>
            </div>
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
                Correo Electronico
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
                Repetir Contraseña
              </label>
            </div>
            <button className={styles.btn}>Registrarse</button>
            <div className="m-1">
              <p
                style={{
                  fontSize: "10px",
                  textAlign: "justify",
                  lineHeight: "10px",
                  letterSpacing: "0px",
                }}
              >
                Al presionar el boton "Registrase" acepata todos los Terminos y
                Condiciones de la Web, asi como sus politicas de privacidad.{" "}
              </p>
            </div>
            <hr />
            <span>
              Ya tienes cuenta?{" "}
              <Link to="/login" className={styles.btnLink}>
                Inicia Sesion
              </Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterDriver;
