import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { finishShipment } from "../../actions/shipment";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { BsArrowRight } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { formatDateSeconds, formatDistance } from "../../utils/utils";
import { RiPinDistanceLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import {
  DirectionsRenderer,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import RateDriver from "../rateDriver";
const libraries = ["places"];

const Request = ({ shipment }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    id,
    locationFrom,
    locationTo,
    shipDate,
    items,
    offers,
    state,
    delivery_shift,
  } = shipment;
  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(finishShipment(id));
  };

  const center = { lat: -32.9460738, lng: -60.6425259 };
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const calculateRoute = async (originRef, destinationRef) => {
    console.log(originRef);
    console.log(destinationRef);
    if (originRef === "" || destinationRef === "") {
      return;
    }
    //desactivo eslint porque si esta definido
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destinationRef,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  };

  useEffect(() => {
    const a = async () => {
      if (locationFrom != "" && locationTo != "") {
        await calculateRoute(locationFrom, locationTo);
      }
    };
    a();
  }, [shipment]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div className={styles.cardForm}>
      <h1>Solicitud de Transporte Nº: {id}</h1>
      <hr className={styles.line} />
      <div className="row m-1 ">
        <div className="col-lg-12 mt-2">
          <h4>
            <b> Detalles del Viaje</b>
          </h4>
          <div className="text-start ps-1 mb-2">
            <div className=" my-3">
              <BiCurrentLocation size={"18px"} /> <b> {locationFrom}</b>{" "}
              <BsArrowRight className={styles.arrowIcon} />{" "}
              <GrLocationPin size={"18px"} /> <b> {locationTo}</b>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <AiOutlineCalendar size={"18px"} /> <b>Fecha:</b>{" "}
                {transformDateFormat(shipDate)}
              </div>
              <div className="col-6">
                <AiOutlineClockCircle size={"18px"} /> <b>Horario:</b>{" "}
                {delivery_shift == "M" ? "Mañana" : "Tarde"}
              </div>
            </div>
            <div className="row my-3 d-flex">
              <div className="col-6">
                <RiPinDistanceLine size={"20px"} />
                <b> Distancia:</b> {formatDistance(shipment.distance)}
              </div>
              <div className="col-6">
                <CgSandClock size={"20px"} />
                <b> Duracion Aprox.:</b> {formatDateSeconds(shipment.duration)}
              </div>
            </div>
          </div>
          <div className="row my-3">
            <b className="ms-3">Mapa</b>
            <div className="col-12 px-4">
              {isLoaded && (
                <GoogleMap
                  apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                  mapContainerStyle={{ width: "auto", height: "350px" }}
                  center={center}
                  zoom={15}
                  options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                >
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row m-1 mt-3">
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
                      <div className="col-lg-2 col-12">
                        <div>
                          <b>Item</b>
                        </div>
                        <div>{item.description}</div>
                      </div>
                      <div className="col-lg-2 col-4">
                        <div>
                          <b>Cantidad </b>
                        </div>
                        <div>{item.quantity}</div>
                      </div>
                      <div className="col-lg-4 col-4">
                        <div>
                          <b>Tamaño </b>
                        </div>
                        <div>
                          {item.height}x{item.width}x{item.depth} cm
                        </div>
                      </div>
                      <div className="col-lg-2 col-4">
                        <div>
                          <b>Peso </b>
                        </div>
                        <div>{item.weight}</div>
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
          offers.length != 0 ? (
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
            <div className="d-flex justify-content-center mb-2">
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
                        {elemento.updatedDate &&
                          transformDateFormat(elemento.updatedDate)}
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
