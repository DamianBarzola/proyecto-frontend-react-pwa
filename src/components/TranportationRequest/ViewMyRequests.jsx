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
        name: "jorginho",
        price: 500,
      },
      {
        name: "Javi",
        price: 800,
      },
      {
        name: "",
        price: 800,
      },
    ],
  },
];
const ViewMyRequests = () => {
  return (
    <div className={styles.cardForm}>
      <h1>Mis Solicitudes</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          {data.map((elemento) => {
            return (
              <Link
                to={"/request/" + elemento.id}
                params={elemento.id}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.cardElement}>
                  <div className="row">
                    <div className="col-12">
                      <h3>{elemento.packInfo}</h3>
                      <hr className={styles.asd} />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-6 ">
                      <div className="mb-2">
                        <b> Origen:</b> {elemento.origin}
                      </div>
                      <div>
                        <b> Destino:</b> {elemento.destination}
                      </div>
                    </div>
                    <div className="col-6 align-self-center ">
                      <div>
                        <b>Ofertas:</b> {elemento.offers.length}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewMyRequests;
