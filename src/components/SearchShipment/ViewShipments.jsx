import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { BsArrowRight } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { MdLocalShipping, MdOutlineLocalOffer } from "react-icons/md";
import { BiBox, BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";

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
              {shipments &&
                shipments.map((element) => {
                  return (
                    <Link
                      to={"/shipment/driver/" + element.id}
                      params={element.id}
                      style={{ textDecoration: "none" }}
                      key={element.id}
                    >
                      <div className={styles.cardElement}>
                        <div className="row">
                          <div className="col-2 d-flex justify-content-center align-items-center">
                            <FaTruck className={styles.truckIcon} />
                          </div>
                          <div className="col-10">
                            <h5>
                              <b>{"Solicitud Nº " + element.id}</b>
                            </h5>
                            <hr className={styles.line} />
                            <div className="row p-2 mt-1">
                              <div className="col-12 align-self-center">
                                <div>
                                  <BiCurrentLocation size={"18px"} />{" "}
                                  <b>{element.locationFrom}</b>
                                  <BsArrowRight
                                    className={styles.arrowIcon}
                                  />{" "}
                                  <GrLocationPin size={"18px"} />{" "}
                                  <b>{element.locationTo}</b>
                                </div>
                                <div className="row my-1">
                                  <div className="col-7">
                                    <AiOutlineCalendar size={"18px"} />{" "}
                                    <b>Fecha:</b>{" "}
                                    {transformDateFormat(element.shipDate)}
                                  </div>
                                  <div className="col-5">
                                    <AiOutlineClockCircle size={"18px"} />{" "}
                                    <b>Horario:</b>{" "}
                                    {element.delivery_shift == "M"
                                      ? "Mañana"
                                      : "Tarde"}
                                  </div>
                                </div>
                                <div className="my-1">
                                  <BiBox size={"18px"} /> <b> Items: </b>
                                  {element.items &&
                                    element.items.map(
                                      (elemento) =>
                                        elemento.quantity +
                                        " x " +
                                        elemento.description
                                    )}
                                </div>
                              </div>
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
