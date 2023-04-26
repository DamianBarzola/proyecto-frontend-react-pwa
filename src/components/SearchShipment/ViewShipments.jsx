import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import {BsArrowRight} from "react-icons/bs";
import {FaTruck} from "react-icons/fa";

const ViewShipments = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <h1>Solicitudes Disponibles</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(shipments).length !== 0 ? (
            <div>
              {shipments.map((element) => {
                return (
                  <Link
                    to={"/shipment/driver/" + element.id}
                    params={element.id}
                    style={{ textDecoration: "none" }}
                    key={element.id}
                  >
                    <div className={styles.cardElement}>
                      <div className="row">
                      <div className="col-2 " >
                          <FaTruck className={styles.truckIcon} />

                      </div>
                        <div className="col-9">
                          <h3>{"Solicitud Nº: " + element.id}</h3>
                          <hr className={styles.line}  />
                      <div className="row p-2 ">
                          <div className="mb-2">
                            <b> {element.locationFrom}</b> <BsArrowRight className={styles.arrowIcon} /> <b> {element.locationTo}</b> 
                          </div>

                        </div>
                          <div>
                            <b>Fecha:</b>{" "}
                            {transformDateFormat(element.shipDate)}
                          </div>
                          <div>
                            <b>Items:</b>{" "}
                            {element.items && element.items.length}
                          </div>
                      </div>
                        </div>
                      </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div>
              <h5>Actualmente hay Solicitudes</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewShipments;
