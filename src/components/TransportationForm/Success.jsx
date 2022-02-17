import React from "react";
import styles from "../../styles/Transportation.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createShipment } from "../../actions/shipment";

const Success = ({ prevStep, values }) => {
  const dispatch = useDispatch();

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(createShipment(values));
  };

  return (
    <div>
      <h1>Finalizar Solicitud de Transporte</h1>
      <hr />
      <div className={styles.card}>
        <h3 className="pt-3 ">Solicitud de Transporte</h3>
        <hr className="m-2" />
        <div className="row pb-3 text-start" style={{ fontSize: "17px" }}>
          <div className="col-lg-10 ps-5 ">
            <h5 className="ps-5">
              <b> Detalles del Viaje</b>
            </h5>
            <div>
              <b> Fecha:</b> {values.shipment.shipDate}
            </div>
            <div>
              {" "}
              <b> Origen:</b> {values.shipment.locationFrom}
            </div>
            <div>
              {" "}
              <b> Destino:</b> {values.shipment.locationTo}
            </div>
          </div>
        </div>
        <div className="row text-start pb-3 p-2">
          <div className="col-lg-12 ">
            <h5 className="ps-5">
              <b> Detalles de la Carga</b>
            </h5>

            <div>
              {values.items.map((item, index) => {
                return (
                  <div className={styles.cardItem2} key={index}>
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-lg-3 ">
                        <b>Item:</b> {item.description}
                      </div>
                      <div className="col-lg-3">
                        <b>Cantidad: </b>
                        {item.quantity}
                      </div>
                      <div className="col-lg-3">
                        <b>Tamaño: </b> {item.size}
                      </div>
                      <div className="col-lg-3">
                        <b>Peso: </b> {item.weight} Kgs.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className={styles.btnback} onClick={Previous}>
          Anterior
        </button>
        <button className={styles.btnDefault} onClick={handleAdd}>
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default Success;
