import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { Link, Navigate } from "react-router-dom";
import inputTxt from "../styles/Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../utils/validations";
import Footer from "../components/Footer/Footer";

const RegisterDriver = () => {
  document.title = "Fleteros - Crear Cuenta";

  const user = useSelector((state) => state.auth.user);
  const msg = useSelector((state) => state.auth.msg);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    password2: "",
    birthdate: "",
  });

  const {
    name,
    lastname,
    email,
    phone,
    gender,
    password,
    password2,
    birthdate,
  } = data;
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (data.email.trim() !== "" && data.password.trim() !== "") {
      // falta valida injections (se valida en el back?)
      if (validateEmail(data.email)) {
        // dispatch(userlogin(email, password));
      } else {
        // dispatch(errorMsg("Correo electrónico con formato incorrecto"));
      }
    } else {
      // dispatch(errorMsg("Complete los campos"));
    }
  };

  if (user) return <Navigate to="../home" />;
  return (
    <div>
      <section className={styles.cardLanding}>
        <form className={styles.form}>
          <h1>Crear Cuenta como Transportista</h1>
          <div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={name}
                name="name"
                type="text"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Nombre
              </label>
            </div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={lastname}
                name="lastname"
                type="text"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Apellido
              </label>
            </div>

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
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                type="password"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Repetir Contraseña
              </label>
            </div>
            <div>
              <input type="file" />
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterDriver;
