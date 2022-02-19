import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import stylesOffer from "../../styles/Offer.module.css";
import { readOffer } from "../../actions/offer";
import { Link } from "react-router-dom";
import { transformDateFormat } from "../../utils/validations";

const MyOffersDriver = () => {
  document.title = "Fleteros - Mis Ofertas";
  const navigate = useNavigate();
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readOffer());
  }, [dispatch]);
  const offers = useSelector((state) => state.offer.data);
  if (!driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
        <div className="col-12 ">
          <div className={stylesOffer.cardForm}>
            <h1>Ofertas Realizadas</h1>
            <hr />
            <div className="row">
              <div className="col-12">
                {Object.keys(offers).length !== 0 ? (
                  <div>
                    {offers.map((element) => {
                      return (
                        !element.confirmed && (
                          <div
                            className={stylesOffer.cardElement}
                            key={element.id}
                          >
                            <div className="row">
                              <div className="col-12">
                                <h4 className="pt-2">
                                  Oferta Nro: {element.id}
                                </h4>
                                <hr />
                              </div>
                            </div>
                            <div className="row p-2 text-start">
                              <h5>
                                <b>
                                  {" "}
                                  Solicitud de Transporte Nro:{" "}
                                  {element.shipment.id}{" "}
                                </b>
                              </h5>
                              <div className="col-6 ps-lg-5">
                                <div className="mb-2">
                                  <b> Origen:</b>{" "}
                                  {element.shipment.locationFrom}
                                </div>
                                <div>
                                  <b> Destino:</b> {element.shipment.locationTo}
                                </div>
                              </div>
                              <div className="col-6  ps-lg-5">
                                <div className="mb-2">
                                  <b>Fecha:</b>{" "}
                                  {element.shipment.shipDate &&
                                    transformDateFormat(
                                      element.shipment.shipDate
                                    )}
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="row p-2 text-start  ">
                              {" "}
                              <h5 className="text-start">
                                <b>Mi Oferta:</b>{" "}
                              </h5>
                              <div className="col-6 ps-lg-5">
                                <div className="mb-2">
                                  <b> Precio:</b> {element.price}
                                </div>
                              </div>
                              <div className="col-6  ps-lg-5 ">
                                <div>
                                  <b>Realizada el :</b>{" "}
                                  {element.registrationDate &&
                                    transformDateFormat(
                                      element.registrationDate
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <h5>Actualmente no tienes ofertas realizadas</h5>
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

export default MyOffersDriver;
