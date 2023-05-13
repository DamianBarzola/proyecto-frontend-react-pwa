import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { FaRegDotCircle, FaMapMarkerAlt } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
const libraries = ['places'];

const TravelInfo = ({ nextStep, prevStep, handleChange, handleChangeLocation, values }) => {
  const center = {lat:-32.9460738, lng: -60.6425259}
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const { shipment } = values;
  const { shipDate, locationFrom, locationTo } = shipment;
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef()

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return
    }
    //desactivo eslint porque si esta definido
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRef.current.value = ''
  }

  const [msgErrorTravel, setMsgErrorTravel] = useState("");
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    console.log(shipDate, originRef.current.value, destinationRef.current.value)
    if (shipDate === "" || originRef.current.value === "" || destinationRef.current.value === "") {
      setMsgErrorTravel("Complete todos los campos");
    } else {
      handleChangeLocation(originRef.current.value, destinationRef.current.value)
      e.preventDefault();
      setMsgErrorTravel("");
      nextStep();
    }
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })
  useEffect(() => {
  if (!isLoaded) {
    console.log('aaaaa')
  }else{
    console.log('bbbb')
  }
  })

  return (
    <>
      <h1>Detalles del Envio</h1>
      <hr />
      <div className="row ">
        <div className="col-lg-12">
          <div className="text-start">
            <label className={inputTxt.dateLabel}>Fecha del Viaje</label>

            <input
              onChange={handleChange("shipDate")}
              value={shipDate}
              name="shipDate"
              type="date"
              className={inputTxt.dateInput}
            />
          </div>
          <div className="row mb-2">
          <div className="col-lg-4">

          <div className={inputTxt.form__div}>
            <Autocomplete>

            <input
              type="text"
              className={inputTxt.form__location_input}
              placeholder=" Origen"
              // onChange={handleChange("locationFrom")}
              // value={locationFrom}
              style={{ color: "black", border: "1px solid black" }}
              ref={originRef}
              />
              </Autocomplete>

          </div>
                </div>
          <div className="col-lg-4">
          <div className={inputTxt.form__div}>
          <Autocomplete>

            <input
              type="text"
              className={inputTxt.form__location_input}
              placeholder="Destino"
              // onChange={handleChange("locationTo")}
              // value={locationTo}
              style={{ color: "black", border: "1px solid black" }}
              ref={destinationRef}
            />
            </Autocomplete>
          </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="row mt-3">
            <div className="col-6">

            <button className={inputTxt.add}  type='submit' onClick={calculateRoute}>
              Confirmar
            </button>
            </div>
            <div className="col-6">
            <button  className={inputTxt.add} type='submit' onClick={clearRoute}>
              Borrar
            </button>
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

          <GoogleMap
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            mapContainerStyle={{ width: 'auto', height: '350px' }}
            center={center}
            zoom={15}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false
            }}
            >
            {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
        </GoogleMap>
          </div>
              </div>
        </div>
        <div className="col-lg-8"></div>
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
