import React from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { FaRegDotCircle, FaMapMarkerAlt } from "react-icons/fa";

const TravelInfo = ({ nextStep, prevStep, handleChange, values }) => {
  const { shipment } = values;
  const { shipDate, locationFrom, locationTo } = shipment;
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
      <h1>Detalles del Envio</h1>
      <hr />
      <div className="row ">
        <div className="col-lg-12">
          <div className="text-start">
            <label className={inputTxt.dateLabel}>Fecha del Viaje</label>

            <input
              onChange={handleChange("shipDate")}
              value={shipDate}
              name="shipDate"
              type="date"
              className={inputTxt.dateInput}
            />
          </div>
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              onChange={handleChange("locationFrom")}
              value={locationFrom}
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
              onChange={handleChange("locationTo")}
              value={locationTo}
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
      <div className="mt-3">
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
