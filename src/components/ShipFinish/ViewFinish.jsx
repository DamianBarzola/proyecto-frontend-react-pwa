import React from "react";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { Link } from "react-router-dom";
import {FaTruck} from "react-icons/fa";

const ViewInProgress = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <h1>Solicitudes Finalizadas</h1>
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
                          <div className="col-2">
                          <FaTruck className={styles.truckIcon} />

                          </div>
                          <div className="col-9">
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
                              {/* <b>Items:</b> {element.items.length} */}
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
            <div>
            <span>Actualmente no tienes Solicitudes Finalizadas.</span>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInProgress;
