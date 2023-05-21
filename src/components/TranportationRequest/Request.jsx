import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { finishShipment } from "../../actions/shipment";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import {BsArrowRight} from "react-icons/bs";
import RateDriver from "../rateDriver";

const Request = ({ shipment }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, locationFrom, locationTo, shipDate, items, offers, state } =
    shipment;
  // const confirmedOffer = shipment.offers && shipment.offers.find((offer) => offer.state === 'CONFIRMED');
  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(finishShipment(id));
  };

  return (
    <div className={styles.cardForm}>
      <h1>Solicitud de Transporte Nº: {id}</h1>
      <hr className={styles.line} />
      <div className="row m-1">
        <div className="col-lg-12 ">
          <h4>
            <b> Detalles del Viaje</b>
          </h4>
          <div className="text-start ps-3">
            <div>
              {" "}
              <b> {locationFrom}</b>  <BsArrowRight className={styles.arrowIcon} />  <b> {locationTo}</b> 
            </div>
            <div>
              <b> Fecha:</b> {shipDate && transformDateFormat(shipDate)}
            </div>
          </div>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-lg-12  ">
          <h4>
            <b> Detalles de la Carga</b>
          </h4>

          <div>
            {items ? (
              items.map((item, index) => {
                return (
                  <div className={styles.cardItem2} key={index}>
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-lg-3 ">
                        <b>Item:</b> {item.description}
                      </div>
                      <div className="col-lg-3">
                        <b>Cantidad: </b>
                        {item.quantity}
                      </div>
                      <div className="col-lg-3">
                        <b>Tamaño: </b> {item.height}x{item.width}x{item.depth} cm
                      </div>
                      <div className="col-lg-3">
                        <b>Peso: </b> {item.weight} Kgs.
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h5>No hay items.</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <h2>Ofertas</h2>
      <div>
        {state === "WAITING_OFFERS" ? (
          offers ? (
            offers.map((elemento) => {
              return (
                <Link
                  to={"/offer/" + id + "/" + elemento.id}
                  className={styles.cardElement + " row"}
                  style={{ textDecoration: "none" }}
                  key={elemento.id}
                >
                  <div className="col-6 text-start ps-4">
                    <b>De: </b>
                    {elemento.driver.name + " " + elemento.driver.lastname}
                  </div>

                  <div className="col-6">
                    <b>Precio: $</b>
                    {elemento.price}
                  </div>
                </Link>
              );
            })
          ) : (
            <div>
              <h5>No hay items.</h5>
            </div>
          )
        ) : (
          offers &&
          offers.map((elemento) => {

            return (
              elemento.state === "CONFIRMED" && (
              <div> 
                <div key={elemento.id}>
                  <div className={styles.offercard}>
                    <div className="row">
                      <div className="col-lg-6 ">
                        <b>De: </b>
                        {elemento.driver.name + " " + elemento.driver.lastname}
                      </div>

                      <div className="col-lg-6">
                        <b>Fecha de la Oferta: </b>
                        {elemento.updatedDate && transformDateFormat(elemento.updatedDate)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">
                        <b>Email: </b>
                        {elemento.driver.email}
                      </div>

                      <div className="col-lg-6">
                        <b>Precio: $</b>
                        {elemento.price}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">
                        <b>Telefono: </b>
                        {elemento.driver.phone}
                      </div>

                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                  {/* <button className={styles.btn} onClick={handleFinish}>
                    {" "}
                    Finalizar Viaje
                  </button> */}
                </div>
                <div>
                    <RateDriver shipment={shipment} confirmedOffer={elemento}/>
                </div>
              </div>
              )
            );
          })
        )}
      </div>
      <hr />
      <button onClick={() => navigate(-1)} className={styles.btnback}>
        Volver
      </button>
    </div>
  );
};

export default Request;
