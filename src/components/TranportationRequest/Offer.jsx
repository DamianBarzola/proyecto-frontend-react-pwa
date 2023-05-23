import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acceptOffer } from "../../actions/shipment";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { readRate } from "../../actions/offer";

const Offer = ({ offer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await readRate(offer.driver.id);
        setRate(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (offer?.driver?.id !== null) {
      fetchRate();
    }
  }, [offer?.driver?.id]);



  const handleAcept = (e) => {
    e.preventDefault();
    dispatch(acceptOffer(offer.id));
  };

  return (
    <div className={styles.cardForm}>
      <h2>Detalles de la Oferta</h2>
      <hr />
      <div className="row m-4">
        {Object.keys(offer).length !== 0 && (
          <div className="col-lg-12  text-start">
            <h5 className="text-center">
              <b>Datos del Conductor</b>
            </h5>
            <div className="my-2">
              <b>Nombre: </b>
              {offer.driver.name + " " + offer.driver.lastname}
            </div>
            <div className="my-2">
              <b>Correo Electrónico: </b>
              {offer.driver.email}
            </div>
            <div className="my-2">
              <b>Telefono: </b>
              {offer.driver.phone}
            </div>
            <h5 className="text-center mt-3">
              <b>Detalles de la Oferta</b>
            </h5>
            <div className="my-2">
              <b>Precio calculado por el envio: </b>$ {offer && offer.price}
            </div>
            <div className="my-2">
              <b>Fecha de la Oferta: </b>
              {offer.registrationDate &&
                transformDateFormat(offer.registrationDate)}
            </div>
            {rate !== null && (
            <div className="my-2">
              <b>Valoracion promedio: </b> {rate.toFixed(2)} / 5
            </div>
            )}
          </div>
        )}
      </div>
      <div className="row d-flex justify-content-evenly mt-5">
        <div className="col-6">
          <button className={styles.btnback} onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
        <div className="col-6">
          <button
            className={styles.btnback + " " + styles.next}
            onClick={handleAcept}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
