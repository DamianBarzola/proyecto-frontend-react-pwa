import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import inputTxt from "../styles/Input.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../utils/validations";
import { driverlogin, errorMsg } from "../actions/auth";
import Footer from "../components/Footer/Footer";
const LoginDriver = () => {
  document.title = "Fleteros - Inicio de Sesion Conductor";

  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const msg = useSelector((state) => state.auth.msg);
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });

  const { email, password } = data;

  useEffect(() => {
    dispatch(errorMsg(""));
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleLoginDriver = (e) => {
    dispatch(errorMsg(""));
    e.preventDefault();
    if (data.email.trim() !== "" && data.password.trim() !== "") {
      if (validateEmail(data.email)) {
        dispatch(driverlogin(email, password));
      } else {
        dispatch(errorMsg("Correo electrónico con formato incorrecto"));
      }
    } else {
      dispatch(errorMsg("Complete los campos"));
    }
  };

  if (user) return <Navigate to="../home" />;
  if (driver) return <Navigate to="../homedriver" />;

  return (
    <div>
      <section className={styles.cardLanding}>
        <form className={styles.form}>
          <h1>Iniciar Sesion - Conductor</h1>
          <div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Correo Electronico
              </label>
            </div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Contraseña
              </label>
            </div>
            {msg && (
              <div className="mb-3">
                <span
                  style={{
                    color: "red",
                    letterSpacing: "1px",
                    fontSize: "16px",
                  }}
                >
                  {msg}
                </span>
              </div>
            )}
            <button
              type="submit"
              className={styles.btn}
              onClick={handleLoginDriver}
            >
              Ingresar
            </button>
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginDriver;
