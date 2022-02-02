import React from "react";
import styles from "../../styles/Transportation.module.css";
import { Link } from "react-router-dom";

const Success = ({ prevStep, values }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <h1>Finalizar Solicitud de Transporte</h1>
      <hr />
      <div className={styles.card}>
        <h3 className="pt-3">Solicitud de Transporte</h3>
        <hr className="m-2" />
        <div className="row pb-3 text-start" style={{ fontSize: "17px" }}>
          <div className="col-md-6 ps-5">
            <h5>Detalles de la Carga</h5>
            <div>
              Carga: <br />
              {values.packDetails}
            </div>
            <div>
              Comentarios: <br />
              {values.packComment}
            </div>
          </div>
          <div className="col-md-6 ps-5">
            <h5>Detalles del Viaje</h5>
            <div>
              Origen: <br />
              {values.origin}
            </div>
            <div>
              Destino: <br />
              {values.destination}
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btnback} onClick={Previous}>
        Anterior
      </button>
      <Link to="/" className={styles.btnDefault}>
        Finalizar
      </Link>
    </div>
  );
};

export default Success;
