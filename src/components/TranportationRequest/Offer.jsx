import React from "react";
import styles from "../../styles/Request.module.css";

const data = {
  id: 1,
  name: "Jorge",
  reputacion: "5/5",
  vehicle: "Camioneta Mod 2009",
  countTravels: 200,
  price: 800,
  comments:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus veniam voluptatum distinctio modi omnis recusandae dolorum voluptates deleniti?",
};
const Offer = () => {
  return (
    <div className={styles.cardForm}>
      <h2>Detalles acerca del Transportista</h2>
      <hr />
      <div className="row m-4">
        <div className="col-lg-6 text-start ps-lg-5">
          <div>
            <b>Nombre: </b>
            {data.name}
          </div>
          <div>
            <b>Vehiculo: </b>
            {data.vehicle}
          </div>
          <div>
            <b>Reputacion: </b>
            {data.reputacion}
          </div>
          <div>
            <b>Cantidad de viajes realizados: </b>
            {data.countTravels}
          </div>
        </div>
        <div className="col-lg-6 text-start ps-lg-5">
          <div>
            <b>Precio calculado por el envio: </b>$ {data.price}
          </div>
          <div>
            <b>Comentarios: </b>
            {data.comments}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly mt-5">
        <div className="col-6">
          <button className={styles.btnback}>Volver</button>
        </div>
        <div className="col-6">
          <button className={styles.btnback + " " + styles.next}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
