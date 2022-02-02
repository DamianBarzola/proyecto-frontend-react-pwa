import React from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";

const PackageInfo = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <h1>Detalles de la Carga</h1>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          {" "}
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              value={values.packDetails}
              onChange={handleChange("packDetails")}
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Carga
            </label>
          </div>{" "}
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              value={values.packComment}
              onChange={handleChange("packComment")}
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Comentarios
            </label>
          </div>
          <div className={inputTxt.form__div}>
            <input
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              value={values.other}
              onChange={handleChange("other")}
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Vehiculo Preferido/Foto/peso/medidas
            </label>
          </div>
          <button className={styles.btnDefault} onClick={Continue}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default PackageInfo;
