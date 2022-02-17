import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
const data = [
  {
    id: 1,
    packInfo: "Cosas",
    origin: "Pellegrini 1500",
    destination: "San juan 200",
    offers: [
      {
        name: "jorginho",
        price: 500,
      },
    ],
  },
  {
    id: 2,
    packInfo: "Cositas",
    origin: "Oroño 200",
    destination: "9 de julio 500",
    offers: [
      {
        idOffer: 1,
        name: "jorginho",
        reputation: "4/5",
        price: 500,
      },
      {
        idOffer: 2,
        name: "Javi",
        reputation: "5/5",
        price: 800,
      },
      {
        idOffer: 3,
        name: "Antonio",
        reputation: "2/5",
        price: 800,
      },
    ],
  },
];
const Request = ({ shipment }) => {
  const { id, locationFrom, locationTo, shipDate } = shipment;
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
      <hr />
      <h2>Ofertas</h2>
      <div>
        {data[1].offers.map((elemento) => {
          return (
            <Link
              to={"/offer/" + elemento.idOffer} //capar que hay q pasarlo como json y no en la url
              className={styles.cardElement + " row"}
              style={{ textDecoration: "none" }}
            >
              <div className="col-4 text-start ps-4">
                <b>Nombre: </b>
                {elemento.name}
              </div>
              <div className="col-4 text-start ps-4">
                <b>Reputacion: </b>
                {elemento.reputation}
              </div>
              <div className="col-4">
                <b>Precio: $</b>
                {elemento.price}
              </div>
            </Link>
          );
        })}
      </div>
      <hr />
      <Link to="/" className={styles.btnback}>
        Volver
      </Link>
    </div>
  );
};

export default Request;
