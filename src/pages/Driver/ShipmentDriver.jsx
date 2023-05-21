import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/Home.module.css";
import inputTxt from "../../styles/Input.module.css";
import stylesRequest from "../../styles/Request.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import { transformDateFormat } from "../../utils/validations";
import { createOffer } from "../../actions/offer";
import { BsArrowRight } from "react-icons/bs";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { RiPinDistanceLine } from "react-icons/ri";
import { formatDateSeconds, formatDistance } from "../../utils/utils";
import { CgSandClock } from "react-icons/cg";

const ShipmentDriver = () => {
  const center = { lat: -32.9460738, lng: -60.6425259 };
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shipment, setshipment] = useState({});
  const [priceOffer, setpriceOffer] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const offerCreated = useSelector((state) => state.offer.offerCreated);
  const { idShipment } = useParams();
  const ArrayShipment = useSelector((state) => state.shipment.data);
  const {
    id,
    locationFrom,
    locationTo,
    shipDate,
    items,
    state,
    delivery_shift,
  } = shipment;

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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const a = async () => {
      if (locationFrom != "" && locationTo != "") {
        await calculateRoute(locationFrom, locationTo);
      }
    };
    a();
  }, [shipment]);

  useEffect(() => {
    try {
      setshipment(
        ArrayShipment.find((x) => {
          return x.id === parseInt(idShipment);
        })
      );
      calculateRoute();
    } catch {
      navigate("../shipments/driver");
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setpriceOffer(value);
  };
  const [msgErrorOffer, setMsgErrorOffer] = useState("");
  const handleOffer = (e) => {
    e.preventDefault();
    if (priceOffer > 0) {
      setMsgErrorOffer("");
      dispatch(createOffer(priceOffer, id));
    } else {
      setMsgErrorOffer("Precio Invalido");
    }
  };
  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  if (offerCreated) {
    return <Navigate to="../notification/driver/offerCreated" />;
  }
  return (
    <>
      <NavigationBarDriver />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 d-flex justify-content-center ps-0">
          <div className={stylesRequest.cardForm}>
            <h1>Solicitud de Transporte Nº: {id}</h1>
            <hr />
            <div className="row m-1">
              <div className="col-lg-12 ">
                <h4>
                  <b> Detalles del Viaje</b>
                </h4>
                <div className="text-start ps-3">
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
                      <b> Duracion Aprox.:</b>{" "}
                      {formatDateSeconds(shipment.duration)}
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
            <div className="row m-1">
              <div className="col-lg-12  ">
                <h4>
                  <b> Detalles de la Carga</b>
                </h4>

                <div>
                  {items ? (
                    items.map((item, index) => {
                      return (
                        <div className={stylesRequest.cardItem2} key={index}>
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
            <div className="m-1">
              <div className="col-12">
                <h4>
                  <b>Mi Oferta</b>
                </h4>
                <div className="ps-3 pe-3">
                  <div className={inputTxt.form__div}>
                    <input
                      onChange={handleChange}
                      value={priceOffer}
                      name="priceOffer"
                      type="number"
                      className={inputTxt.form__input}
                      placeholder=" "
                      style={{ color: "black", border: "1px solid black" }}
                    />
                    <label
                      className={inputTxt.form__label}
                      style={{ color: "black" }}
                    >
                      Precio (en pesos argentinos)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {msgErrorOffer && (
              <div>
                <span className="text-danger">
                  <b>{msgErrorOffer}</b>{" "}
                </span>
              </div>
            )}
            <hr />
            <button
              onClick={() => navigate(-1)}
              className={stylesRequest.btnback}
            >
              Volver
            </button>
            <button onClick={handleOffer} className={stylesRequest.btn}>
              Realizar Oferta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentDriver;
