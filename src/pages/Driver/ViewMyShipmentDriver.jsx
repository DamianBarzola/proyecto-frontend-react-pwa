import React, { useEffect, useState } from "react";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import { transformDateFormat } from "../../utils/validations";
import styles from "../../styles/Home.module.css";
import stylesRequest from "../../styles/Request.module.css";
import { useDispatch, useSelector } from "react-redux";
import { finishShipmentDriver } from "../../actions/shipment";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";

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

  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(finishShipmentDriver(shipment.shipment.id));
  };

  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      {console.log(shipment)}
      <NavigationBarDriver />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 d-flex justify-content-center ps-0">
          <div className={stylesRequest.cardForm}>
            <h5>
              <b> Viaje Nº: {shipment.shipment && shipment.shipment.id}</b>
            </h5>
            <hr />
            <div className="row m-1">
              <div className="col-lg-12 ">
                <h4>
                  <b> Detalles del Viaje</b>
                </h4>
                <div className=" my-2">
                <BiCurrentLocation size={"18px"} />{" "}
                <b> {shipment.shipment && shipment.shipment.locationFrom}</b>{" "}
                <BsArrowRight className={stylesRequest.arrowIcon} />{" "}
                <GrLocationPin size={"18px"} />{" "}
                <b> {shipment.shipment && shipment.shipment.locationTo}</b>
              </div>
              <div className="row my-2">
                <div className="col-6">
                  <AiOutlineCalendar size={"18px"} />{" "}
                  <b>Fecha:</b>{" "}
                  {shipment.shipment && transformDateFormat(
                    shipment.shipment.shipDate
                  )}
                </div>
                <div className="col-6">
                  <AiOutlineClockCircle size={"18px"} />{" "}
                  <b>Horario:</b>{" "}
                  {shipment.shipment && shipment.shipment.delivery_shift == "M"
                    ? "Mañana"
                    : "Tarde"}
                </div>
              </div>
              </div>
            </div>
      
            <div>
              {shipment.offers &&
                shipment.offers.map((elemento) => {
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
                              {elemento.updatedDate &&
                                transformDateFormat(elemento.updatedDate)}
                            </div>
                            <div className="col-lg-6">
                              <b>Precio: $</b>
                              {elemento.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
            <hr />
            <div className="row p-2 text-start  ">
              {" "}
              <h5 className="text-start">
                <b>Mi Oferta:</b>{" "}
              </h5>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-2">
                    <MdOutlineLocalOffer size={"18px"} />{" "}
                    <b> Precio:</b> {shipment.price}
                  </div>
                </div>
                <div className="col-6   ">
                  <div>
                    <b>Realizada el :</b>{" "}
                    {shipment.registrationDate &&
                      transformDateFormat(
                        shipment.registrationDate
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div>

            <button
              onClick={() => navigate(-1)}
              className={stylesRequest.btnback}
            >
              Volver
            </button>
            <button onClick={handleFinish} className={stylesRequest.btn}>
              Finalizar Solicitud
            </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMyShipmentDriver;
