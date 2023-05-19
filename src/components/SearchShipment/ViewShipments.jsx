import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { BsArrowRight } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const ViewShipments = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <div className="d-flex align-items-center ms-1">
        <MdLocalShipping size="2rem" />
        <h1 className="m-0 ms-2">Solicitudes Disponibles</h1>
      </div>
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
                        <div className="col-2 ">
                          <FaTruck className={styles.truckIcon} />
                        </div>
                        <div className="col-9">
                          <h3>{"Solicitud Nº: " + element.id}</h3>
                          <hr className={styles.line} />
                          <div className="row p-2 ">
                            <div className="mb-2">
                              <b> {element.locationFrom}</b>{" "}
                              <BsArrowRight className={styles.arrowIcon} />{" "}
                              <b> {element.locationTo}</b>
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
            <div className="my-4 d-flex justify-content-center">
              <h4>Actualmente hay Solicitudes.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewShipments;
