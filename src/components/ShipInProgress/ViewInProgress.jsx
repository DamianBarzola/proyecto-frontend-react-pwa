import React from "react";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { Link } from "react-router-dom";
import { BsFillClockFill } from "react-icons/bs";

const ViewInProgress = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <div className="d-flex align-items-center ms-1">
        <BsFillClockFill size="2rem" />
        <h1 className="m-0 ms-2">Solicitudes En Curso</h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(shipments).length !== 0 ? (
            <div>
              {shipments.map((element) => {
                return (
                  // element.state === "Offer Accepted" && (
                  <Link
                    to={"/shipment/" + element.id}
                    params={element.id}
                    style={{ textDecoration: "none" }}
                    key={element.id}
                  >
                    <div className={styles.cardElement}>
                      <div className="row">
                        <div className="col-3"></div>

                        <div className="col-8">
                          <h3>{"Solicitud Nro: " + element.id}</h3>
                          <hr className={styles.asd} />
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  // )
                );
              })}
            </div>
          ) : (
            <div className="my-4 d-flex justify-content-center">
              <h4>Actualmente no tienes Solicitudes en Curso.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInProgress;
