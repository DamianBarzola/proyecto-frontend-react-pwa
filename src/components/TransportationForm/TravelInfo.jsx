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
import { formatDateSeconds, formatDistance } from "../../utils/utils";
import { RiPinDistanceLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
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

  const [origen, setOrigen] = useState("");
  const [destination, setDestination] = useState("");

  const calculateRoute = async (originRef, destinationRef) => {
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
    setDistance(results.routes[0].legs[0].distance.value);
    setDuration(results.routes[0].legs[0].duration.value);
    setOrigen(results.routes[0].legs[0].start_address);
    setDestination(results.routes[0].legs[0].end_address);
    console.log(results.routes[0].legs[0].distance.text);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setOrigen("");
    setDestination("");
  };

  const [msgErrorTravel, setMsgErrorTravel] = useState("");
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    if (shipDate === "" || hour === "" || origen === "" || destination === "") {
      setMsgErrorTravel("Complete todos los campos");
    } else {
      handleChangeLocation(origen, destination, duration, distance, hour);
      e.preventDefault();
      setMsgErrorTravel("");
      nextStep();
    }
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
              <label className={inputTxt.dateLabel}>Horario Aproximado</label>
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
                    value={origen}
                    onChange={(e) => {
                      setOrigen(e.target.value);
                    }}
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
                    // ref={destinationRef}
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                    }}
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
                    onClick={() => calculateRoute(origen, destination)}
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
            <RiPinDistanceLine size={"20px"} /> <b>Distancia: </b>{" "}
            {formatDistance(distance)}
          </div>
          <div className="col-5">
            <CgSandClock size={"20px"} /> <b>Duración Aproximada: </b>{" "}
            {formatDateSeconds(duration)}
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
