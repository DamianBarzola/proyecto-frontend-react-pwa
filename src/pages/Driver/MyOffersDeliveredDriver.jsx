import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import stylesRequest from "../../styles/Request.module.css";
import { readShipmentDeliveredDriver } from "../../actions/shipment";
import { Link } from "react-router-dom";
import { transformDateFormat } from "../../utils/validations";
import { BsArrowRight, BsFillFolderFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { BiBox, BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";
import { RiPinDistanceLine } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { formatDateSeconds, formatDistance } from "../../utils/utils";

const MyOffersDeliveredDriver = () => {
  document.title = "Fleteros - Mis viajes";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readShipmentDeliveredDriver());
  }, [dispatch]);

  if (user) {
    return <Navigate to="../home" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
    {console.log(shipments)}
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
        <div className="col-12 d-flex justify-content-center ps-0">
          <div className={stylesRequest.cardForm}>
            <div className="d-flex align-items-center ms-1">
              <BsFillFolderFill size="2rem" />
              <h1 className="m-0 ms-2">Mis Viajes Realizados</h1>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                {Object.keys(shipments).length !== 0 ? (
                  <div>
                    {shipments.map((element) => {
                      return (
                        <Link
                          to={"/myshipment/driver/" + element.id}
                          params={element.id}
                          style={{ textDecoration: "none" }}
                          key={element.id}
                        >
                          <div className={stylesRequest.cardElement}>
                            <div className="row">
                              <div className="col-2 d-flex justify-content-center align-items-center">
                                <FaTruck className={stylesRequest.truckIcon} />
                              </div>
                                <div className="col-10">
                                  <h5>
                                    <b>{"Viaje Nº: " + element.shipment?.id }</b>
                                  </h5>
                                  <hr className={stylesRequest.line} />
                                <div className="row p-2 mt-1">
                                  <div className="col-12 align-self-center">
                                    <div >
                                      <BiCurrentLocation size={"18px"} />{" "}
                                      <b> {element.shipment?.locationFrom}</b>{" "}
                                      <BsArrowRight
                                        className={stylesRequest.arrowIcon}
                                      />{" "}
                                      <GrLocationPin size={"18px"} />{" "}
                                      <b> {element.shipment?.locationTo}</b>
                                      </div>

                                      <div className="row my-1">
                                      <div className="col-6">
                                      <AiOutlineCalendar size={"18px"} />{" "}
                                        <b>Fecha:</b>{" "}
                                        {transformDateFormat(element.shipment?.shipDate)}
                                        </div>
                                        <div className="col-6">
                                          <AiOutlineClockCircle size={"18px"} />{" "}
                                          <b>Horario:</b>{" "}
                                          {element.shipment?.delivery_shift == "M"
                                            ? "Mañana"
                                            : "Tarde"}
                                        </div>
                                        <div className="row my-1">
                              <div className="col-6">
                                <RiPinDistanceLine size={"20px"} />
                                <b> Distancia:</b> {formatDistance(element.shipment?.distance)}
                              </div>
                              <div className="col-6">
                                <CgSandClock size={"20px"} />
                                <b> Duracion Aprox.:</b> {formatDateSeconds(element.shipment?.duration)}
                              </div>
                            </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="my-4 d-flex justify-content-center">
                    <h4>No tienes ningun viaje realizado.</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOffersDeliveredDriver;
