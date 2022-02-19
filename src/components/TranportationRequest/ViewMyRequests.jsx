import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";

const ViewMyRequests = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <h1>Mis Solicitudes</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(shipments).length !== 0 ? (
            <div>
              {shipments.map((element) => {
                return (
                  element.state === "Waiting Offers" && (
                    <Link
                      to={"/shipment/" + element.id}
                      params={element.id}
                      style={{ textDecoration: "none" }}
                      key={element.id}
                    >
                      <div className={styles.cardElement}>
                        <div className="row">
                          <div className="col-12">
                            <h3>{"Solicitud Nro: " + element.id}</h3>
                            <hr className={styles.asd} />
                          </div>
                        </div>
                        <div className="row p-2 ">
                          <div className="col-6 ">
                            <div className="mb-2">
                              <b> Origen:</b> {element.locationFrom}
                            </div>
                            <div>
                              <b> Destino:</b> {element.locationTo}
                            </div>
                          </div>
                          <div className="col-6 align-self-center ">
                            <div>
                              <b>Fecha:</b>{" "}
                              {transformDateFormat(element.shipDate)}
                            </div>
                            <div>
                              <b>Items:</b> {element.items.length}
                            </div>
                            <div>
                              <b>Ofertas:</b> {element.offers.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                );
              })}
            </div>
          ) : (
            <div>
              <span>Actualmente no tienes Solicitudes</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMyRequests;
