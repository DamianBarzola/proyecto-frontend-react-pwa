import React from "react";
import styles from "../../styles/Transportation.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createShipment } from "../../actions/shipment";
import {
  formatDate,
  formatDateSeconds,
  formatDistance,
} from "../../utils/utils";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { RiPinDistanceLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";

const Success = ({ prevStep, values }) => {
  const dispatch = useDispatch();

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(createShipment(values));
  };

  return (
    <div>
      <h1>Solicitud de Transporte</h1>
      <hr />
      <div className={styles.card}>
        <div className="row pb-3 text-start" style={{ fontSize: "17px" }}>
          <div className="col-lg-12 ps-5 ">
            <h5 className="ps-3 mt-3">
              <BiDetail size={"20px"} />{" "}
              <b>
                <i> Detalles del Viaje</i>
              </b>
            </h5>
            <div className="row my-3 d-flex">
              <div className="col-6">
                <AiOutlineCalendar size={"20px"} />
                <b> Fecha:</b> {formatDate(values.shipment.shipDate)}
              </div>
              <div className="col-6">
                <AiOutlineClockCircle size={"20px"} />
                <b> Horario:</b>{" "}
                {values.shipment.delivery_shift == "M" ? "Mañana" : "Tarde"}
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <BiCurrentLocation size={"20px"} />
                <b> Origen:</b> {values.shipment.locationFrom}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <GrLocationPin size={"20px"} />
                <b> Destino:</b> {values.shipment.locationTo}
              </div>
            </div>
            <div className="row my-3 d-flex">
              <div className="col-6">
                <RiPinDistanceLine size={"20px"} />
                <b> Distancia:</b> {formatDistance(values.shipment.distance)}
              </div>
              <div className="col-6">
                <CgSandClock size={"20px"} />
                <b> Duracion Aprox.:</b>{" "}
                {formatDateSeconds(values.shipment.duration)}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <hr className="mx-3 m-0" />
        </div> */}
        <div className="row text-start pb-3 p-2">
          <div className="col-lg-12 ">
            <h5 className="ps-5">
              <BiDetail size={"20px"} />
              <b>
                <i>Detalles de la Carga</i>
              </b>
            </h5>

            <div className="px-4">
              {values.items.map((item, index) => {
                return (
                  <div className={styles.cardItem2} key={index}>
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-lg-3 col-12">
                        <div>
                          <b>Item</b>
                        </div>
                        <div>{item.description}</div>
                      </div>
                      <div className="col-lg-3 col-4">
                        <div>
                          <b>Cantidad </b>
                        </div>
                        <div>{item.quantity}</div>
                      </div>
                      <div className="col-lg-3 col-4">
                        <div>
                          <b>Tamaño </b>
                        </div>
                        <div>
                          {item.height}x{item.width}x{item.depth} cm
                        </div>
                      </div>
                      <div className="col-lg-3 col-4">
                        <div>
                          <b>Peso </b>
                        </div>
                        <div>{item.weight}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className={styles.btnback} onClick={Previous}>
          Anterior
        </button>
        <button className={styles.btnDefault} onClick={handleAdd}>
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default Success;
