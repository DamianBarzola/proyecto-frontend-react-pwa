import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { Link, Navigate } from "react-router-dom";
import inputTxt from "../styles/Input.module.css";
import { validateEmail } from "../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import { errorMsg, signUp } from "../actions/auth";
import Footer from "../components/Footer/Footer";

const RegisterUser = () => {
  document.title = "Fleteros - Crear Cuenta";
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const msg = useSelector((state) => state.auth.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorMsg(""));
  }, [dispatch]);

  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "M",
    password: "",
    password2: "",
    birthDate: "",
  });

  const {
    name,
    lastname,
    email,
    phone,
    gender,
    password,
    password2,
    birthDate,
  } = data;
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSingUp = (e) => {
    dispatch(errorMsg(""));
    e.preventDefault();
    if (
      data.name.trim() !== "" &&
      data.lastname.trim() !== "" &&
      data.email.trim() !== "" &&
      data.phone.trim() !== "" &&
      data.password.trim() !== "" &&
      data.password2.trim() !== "" &&
      data.birthDate.trim() !== ""
    ) {
      // falta valida injections (se valida en el back?)
      if (!validateEmail(data.email)) {
        dispatch(errorMsg("Correo electrónico con formato incorrecto"));
      } else if (data.password !== data.password2) {
        dispatch(errorMsg("Las contraseñas no coinciden"));
      } else {
        dispatch(signUp(data));
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
          <h1>Crear Cuenta como Usuario</h1>
          <div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={name}
                name="name"
                type="text"
                maxLength={40}
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
                maxLength={40}
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

            <div className="text-start">
              <label className={inputTxt.dateLabel}>Fecha de Nacimiento</label>

              <input
                onChange={handleChange}
                value={birthDate}
                name="birthDate"
                type="date"
                className={inputTxt.dateInput}
              />
            </div>
            <div className="text-start mt-2">
              <label className={inputTxt.dateLabel}>Genero</label>
              <div>
                <select
                  onChange={handleChange}
                  value={gender}
                  name="gender"
                  id="cars"
                  className={inputTxt.dropDown}
                >
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
            </div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                maxLength={45}
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
                value={phone}
                name="phone"
                type="number"
                className={inputTxt.form__input}
                placeholder=" "
                style={{ color: "black", border: "1px solid black" }}
              />
              <label
                className={inputTxt.form__label}
                style={{ color: "black" }}
              >
                Número de Telefono
              </label>
            </div>
            <div className={inputTxt.form__div}>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
                maxLength={40}
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
                maxLength={40}
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
            <button className={styles.btn} onClick={handleSingUp}>
              Registrarse
            </button>
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

export default RegisterUser;
