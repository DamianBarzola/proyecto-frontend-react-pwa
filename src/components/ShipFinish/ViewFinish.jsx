import React from "react";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { Link } from "react-router-dom";
import { BsFillFolderFill } from "react-icons/bs";
import {  FaTruck } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { BiBox, BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { RiPinDistanceLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { formatDateSeconds, formatDistance } from "../../utils/utils";

const ViewInProgress = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <div className="d-flex align-items-center ms-1">
        <BsFillFolderFill size="2rem" />
        <h1 className="m-0 ms-2">Solicitudes Finalizadas</h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(shipments).length !== 0 ? (
            <div>
              {shipments.map((element) => {
                return (
                  <Link
                    to={"/shipment/" + element.id}
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
                            <b>{"Solicitud Nº: " + element.id}</b>
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
                                <div className="col-6">
                                  <AiOutlineCalendar size={"18px"} />{" "}
                                  <b>Fecha:</b>{" "}
                                  {transformDateFormat(element.shipDate)}
                                </div>
                                <div className="col-6">
                                  <AiOutlineClockCircle size={"18px"} />{" "}
                                  <b>Horario:</b>{" "}
                                  {element.delivery_shift == "M"
                                    ? "Mañana"
                                    : "Tarde"}
                                </div>
                              </div>
                              <div className="my-1">
                                <BiBox size={"18px"} /> <b> Items: </b>
                                {element.items.map(
                                  (elemento) =>
                                    elemento.quantity +
                                    " x " +
                                    elemento.description
                                )}
                              </div>
                              <div className="row my-1">
                              <div className="col-6">
                                <RiPinDistanceLine size={"20px"} />
                                <b> Distancia:</b> {formatDistance(element.distance)}
                              </div>
                              <div className="col-6">
                                <CgSandClock size={"20px"} />
                                <b> Duracion Aprox.:</b> {formatDateSeconds(element.duration)}
                              </div>
                            </div>
                              <div className="mt-1">
                                <MdOutlineLocalOffer size={"18px"} />{" "}
                                <b>Ofertas:</b>{" "}
                                {element.offers && element.offers.length}
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
              <h4>Actualmente no tienes Solicitudes Finalizadas.</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInProgress;
