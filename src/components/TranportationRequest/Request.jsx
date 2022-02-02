import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
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
const Request = () => {
  return (
    <div className={styles.cardForm}>
      <h1>Solicitud de Transporte</h1>
      <hr />
      <div className="row">
        <h2>Detalles</h2>
        <div className="col-lg-6 text-start ps-4">
          <b>Carga: </b>
          {data[1].packInfo} <br />
          <b>Detalles: </b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          reiciendis deleniti. <br />
          <b>Otra cosa: </b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          reiciendis deleniti. <br />
        </div>
        <div className="col-lg-6 text-start ps-5">
          <h3>Viaje</h3>
          <b>Origen: </b>
          {data[1].origin} <br />
          <b>Destino: </b>
          {data[1].destination} <br />
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
