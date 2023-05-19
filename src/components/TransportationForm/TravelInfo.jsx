import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { MdLocationOff, MdLocationOn } from "react-icons/md";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
const libraries = ["places"];

const TravelInfo = ({
  nextStep,
  prevStep,
  handleChange,
  handleChangeLocation,
  values,
}) => {
  const center = { lat: -32.9460738, lng: -60.6425259 };
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const { shipment } = values;
  const { shipDate, hour, locationFrom, locationTo } = shipment;

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    //desactivo eslint porque si esta definido
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.value);
    setDuration(results.routes[0].legs[0].duration.value);
    console.log(results.routes[0].legs[0]);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  const [msgErrorTravel, setMsgErrorTravel] = useState("");
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    if (
      shipDate === "" ||
      hour === "" ||
      originRef.current.value === "" ||
      destinationRef.current.value === ""
    ) {
      setMsgErrorTravel("Complete todos los campos");
    } else {
      handleChangeLocation(
        originRef.current.value,
        destinationRef.current.value,
        duration,
        distance,
        hour
      );
      e.preventDefault();
      setMsgErrorTravel("");
      nextStep();
    }
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <>
      <h1>Detalles del Envio</h1>
      <hr />
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="text-start">
              <label className={inputTxt.dateLabel}>Fecha del Viaje</label>

              <input
                onChange={handleChange("shipDate")}
                value={shipDate}
                name="shipDate"
                type="date"
                className={inputTxt.dateInput}
                min={new Date(Date.now()).toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-start">
              <label className={inputTxt.dateLabel}>Horario</label>
              <input
                onChange={handleChange("hour")}
                value={hour}
                name="hour"
                type="time"
                className={inputTxt.dateInput}
                min={new Date(Date.now()).toISOString().split("T")[0]}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-4">
            <div className={inputTxt.form__div}>
              {isLoaded && (
                <Autocomplete>
                  <input
                    type="text"
                    className={inputTxt.form__location_input}
                    placeholder=" Origen"
                    style={{ color: "black", border: "1px solid black" }}
                    ref={originRef}
                  />
                </Autocomplete>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className={inputTxt.form__div}>
              {isLoaded && (
                <Autocomplete>
                  <input
                    type="text"
                    className={inputTxt.form__location_input}
                    placeholder="Destino"
                    style={{ color: "black", border: "1px solid black" }}
                    ref={destinationRef}
                  />
                </Autocomplete>
              )}
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="row mt-3">
              <div className="col-6">
                <div className="mt-2">
                  <button
                    className={inputTxt.iconButton}
                    type="submit"
                    onClick={calculateRoute}
                  >
                    <MdLocationOn size="20px" />
                    Elegir
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="mt-2">
                  <button
                    className={inputTxt.iconButton}
                    type="submit"
                    onClick={clearRoute}
                  >
                    <MdLocationOff size="20px" />
                    Limpiar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5">
            <b>Distancia: </b> {distance}
          </div>
          <div className="col-5">
            <b>Duración Aproximada: </b> {duration}
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ">
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
      {msgErrorTravel && (
        <div>
          <span className="text-danger">
            <b> {msgErrorTravel}</b>
          </span>
        </div>
      )}
      <div className="mt-3">
        <button onClick={Previous} className={styles.btnback}>
          Anterior
        </button>
        <button onClick={Continue} className={styles.btnDefault}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default TravelInfo;
