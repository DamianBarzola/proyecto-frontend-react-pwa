import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import inputTxt from "../../styles/Input.module.css";
import stylesRequest from "../../styles/Request.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import { transformDateFormat } from "../../utils/validations";
import { createOffer } from "../../actions/offer";
import {BsArrowRight} from "react-icons/bs";

const ShipmentDriver = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const offerCreated = useSelector((state) => state.offer.offerCreated);
  const { idShipment } = useParams();
  const ArrayShipment = useSelector((state) => state.shipment.data);

  const navigate = useNavigate();
  const [shipment, setshipment] = useState({});
  const [priceOffer, setpriceOffer] = useState(0);
  useEffect(() => {
    try {
      setshipment(
        ArrayShipment.find((x) => {
          return x.id === parseInt(idShipment);
        })
      );
    } catch {
      navigate("../shipments/driver");
    }
  }, []);

  const { id, locationFrom, locationTo, shipDate, items, state } = shipment;

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
        <div className="col-12 ">
          <div className={stylesRequest.cardForm}>
            <h1>Solicitud de Transporte Nº: {id}</h1>
            <hr />
            <div className="row m-1">
              <div className="col-lg-12 ">
                <h4>
                  <b> Detalles del Viaje</b>
                </h4>
                <div className="text-start ps-3">
                  <div>
                    {" "}
                    <b> {locationFrom}</b> <BsArrowRight className={stylesRequest.arrowIcon} />  <b> {locationTo}</b> 

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
                        <div className={stylesRequest.cardItem2} key={index}>
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
            <div>
              <h4>Mi Oferta</h4>
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
