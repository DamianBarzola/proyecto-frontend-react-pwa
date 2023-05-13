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
import {BsArrowRight} from "react-icons/bs";

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
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
        <div className="col-12">
          <div className={stylesRequest.cardForm}>
            <h1>Mis Viajes Realizados</h1>
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
                              <div className="col-12">
                                <h3>{"Viaje Nº: " + element.shipment.id}</h3>
                                <hr />
                              </div>
                            </div>
                            <div className="row p-2 ">
                              <div className="col-12 ">
                                <div className="mb-2">
                                <b> {element.shipment.locationFrom}</b>  <BsArrowRight className={stylesRequest.arrowIcon} />  <b> {element.shipment.locationTo}</b> 
{/* 
                                  <b> Origen:</b> {element.shipment.locationFrom}
                                </div>
                                <div>
                                  <b> Destino:</b> {element.shipment.locationTo}
                                </div>
                              </div>
                              <div className="col-6 align-self-center "> */}
                                <div>
                                  <b>Fecha:</b>{" "}
                                  {transformDateFormat(element.shipment.shipDate)}
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
                  <div>
                    <h5>No tienes ningun viaje realiado.</h5>
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
