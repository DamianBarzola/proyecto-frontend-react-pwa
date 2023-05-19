import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { FaClipboardList, FaTruck } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const ViewMyRequests = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <div className="d-flex align-items-center ms-1">
        <FaClipboardList size="2rem" />
        <h1 className="m-0 ms-2">Mis Solicitudes</h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(shipments).length !== 0 ? (
            <div>
              {shipments.map((element) => {
                return (
                  // element.state === "Waiting Offers" && (
                  <Link
                    to={"/shipment/" + element.id}
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
                          <h5>
                            <b>{"Solicitud Nº " + element.id}</b>
                          </h5>
                          <hr className={styles.line} />
                          <div className="row p-2 ">
                            <div className="col-12 align-self-center">
                              <div>
                                <b>{element.locationFrom}</b>
                                <BsArrowRight
                                  className={styles.arrowIcon}
                                />{" "}
                                <b>{element.locationTo}</b>
                              </div>
                              <div>
                                <b>Fecha:</b>{" "}
                                {transformDateFormat(element.shipDate)}
                              </div>
                              <div>
                                <b> Items: </b>
                                {element.items.map(
                                  (elemento) =>
                                    elemento.quantity +
                                    " " +
                                    elemento.description
                                )}
                              </div>
                              <div>
                                <b>Ofertas:</b> {element.offers.length}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
                // );
              })}
            </div>
          ) : (
            <div className="my-4 d-flex justify-content-center">
              <h4>Actualmente no tienes Solicitudes Activas.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMyRequests;
