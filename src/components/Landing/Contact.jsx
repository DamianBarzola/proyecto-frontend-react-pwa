import React from "react";
import styles from "../../styles/Landing.module.css";

import inputTxt from "../../styles/Input.module.css";
import { HiArrowRight } from "react-icons/hi";
const Contact = () => {
  return (
    <div className={styles.cardContact}>
      <b>Contacto</b>
      <div className={inputTxt.form__div}>
        <input type="text" className={inputTxt.form__input} placeholder=" " />
        <label for="" className={inputTxt.form__label}>
          Nombre Completo
        </label>
      </div>
      <div className={inputTxt.form__div}>
        <input type="text" className={inputTxt.form__input} placeholder=" " />
        <label for="" className={inputTxt.form__label}>
          Correo Electrónico
        </label>
      </div>
      <div className={inputTxt.form__div}>
        <textarea
          type="text"
          className={inputTxt.form__input}
          style={{ height: "130px" }}
          placeholder=" "
        />
        <label className={inputTxt.form__label}>Mensaje</label>
      </div>
      <div style={{ textAlign: "center", marginTop: "7rem" }}>
        <button className={styles.btnBegin}>
          Enviar <HiArrowRight style={{ fontSize: "25px" }} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
