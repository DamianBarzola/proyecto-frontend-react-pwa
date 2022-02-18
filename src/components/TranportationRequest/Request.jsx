import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";

const Request = ({ shipment }) => {
  const navigate = useNavigate();
  const { id, locationFrom, locationTo, shipDate, items, offers } = shipment;
  return (
    <div className={styles.cardForm}>
      <h1>Solicitud de Transporte Nro: {id}</h1>
      <hr />
      <div className="row m-1">
        <div className="col-lg-10 ps-5 ">
          <h4>
            <b> Detalles del Viaje</b>
          </h4>
          <div className="text-start ">
            <div>
              <b> Fecha:</b> {shipDate && transformDateFormat(shipDate)}
            </div>
            <div>
              {" "}
              <b> Origen:</b> {locationFrom}
            </div>
            <div>
              {" "}
              <b> Destino:</b> {locationTo}
            </div>
          </div>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-lg-12  ">
          <h4>
            <b> Detalles de la Carga</b>
          </h4>

          <div>
            {items ? (
              items.map((item, index) => {
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
              })
            ) : (
              <div>
                <h5>No hay items.</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <h2>Ofertas</h2>
      <div>
        {offers ? (
          offers.map((elemento) => {
            return (
              <Link
                to={"/offer/" + id + "/" + elemento.id}
                className={styles.cardElement + " row"}
                style={{ textDecoration: "none" }}
                key={elemento.id}
              >
                <div className="col-6 text-start ps-4">
                  <b>De: </b>
                  {elemento.driver.name + " " + elemento.driver.lastname}
                </div>

                <div className="col-6">
                  <b>Precio: $</b>
                  {elemento.price}
                </div>
              </Link>
            );
          })
        ) : (
          <div>
            <h5>No hay items.</h5>
          </div>
        )}
      </div>
      <hr />
      <button onClick={() => navigate(-1)} className={styles.btnback}>
        Volver
      </button>
    </div>
  );
};

export default Request;
