import React from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { FaRegDotCircle, FaMapMarkerAlt } from "react-icons/fa";

const TravelInfo = ({ nextStep, prevStep, handleChange, values }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <h1>Trayecto del Envio</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              onChange={handleChange("origin")}
              value={values.origin}
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              <FaRegDotCircle
                style={{
                  transform: `translate(0px, -1.8px)`,
                }}
              />{" "}
              Origen
            </label>
          </div>
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              value={values.destination}
              onChange={handleChange("destination")}
              style={{ color: "black", border: "1px solid black" }}
            />

            <label className={inputTxt.form__label} style={{ color: "black" }}>
              <FaMapMarkerAlt
                style={{
                  transform: `translate(0px, -1.8px)`,
                }}
              />{" "}
              Destino
            </label>
          </div>
        </div>
        <div className="col-lg-8"></div>
      </div>
      <div>
        <button onClick={Previous} className={styles.btnback}>
          Anterior
        </button>
        <button onClick={Continue} className={styles.btnDefault}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default TravelInfo;
