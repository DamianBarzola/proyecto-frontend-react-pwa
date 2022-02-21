import React, { useEffect, useState } from "react";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import { transformDateFormat } from "../../utils/validations";
import styles from "../../styles/Home.module.css";
import stylesRequest from "../../styles/Request.module.css";
import { useDispatch, useSelector } from "react-redux";
import { readShipment } from "../../actions/shipment";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ViewMyShipmentDriver = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const { idShipment } = useParams();
  const ArrayShipment = useSelector((state) => state.shipment.data);

  const navigate = useNavigate();
  const [shipment, setshipment] = useState({});

  useEffect(() => {
    try {
      setshipment(
        ArrayShipment.find((x) => {
          return x.id === parseInt(idShipment);
        })
      );
    } catch {
      navigate("../myshipments/driver");
    }
  }, []);

  const { id, locationFrom, locationTo, shipDate, items, offers } = shipment;

  const handleAccept = (e) => {
    e.preventDefault();
  };

  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      <NavigationBarDriver />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <div className={stylesRequest.cardForm}>
            <h1>Solicitud de Transporte Nro: {id}</h1>
            <hr />
            <div className="row m-1">
              <div className="col-lg-12 ">
                <h4>
                  <b> Detalles del Viaje</b>
                </h4>
                <div className="text-start ps-3">
                  <div>
                    <b> Fecha:</b> {shipDate && transformDateFormat(shipDate)}
                  </div>
                  <div>
                    {" "}
                    <b> Origen:</b> {locationFrom}
                  </div>
                  <div>
                    {" "}
                    <b> Destino:</b> {locationTo}
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
                              <b>Tamaño: </b> {item.size}
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
            <div>
              {offers &&
                offers.map((elemento) => {
                  return (
                    elemento.confirmed === true && (
                      <div className="p-3" key={elemento.id}>
                        <div className={stylesRequest.cardItem2}>
                          <h4>
                            <b> Mi Oferta</b>
                          </h4>

                          <div className="row">
                            <div className="col-lg-6">
                              <b>Fecha de la Oferta: </b>
                              {"11/11"}
                            </div>
                            <div className="col-lg-6">
                              <b>Precio: $</b>
                              {"500"}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
            <hr />
            <button
              onClick={() => navigate(-1)}
              className={stylesRequest.btnback}
            >
              Volver
            </button>
            <button onClick={handleAccept} className={stylesRequest.btn}>
              Finalizar Solicitud
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMyShipmentDriver;
