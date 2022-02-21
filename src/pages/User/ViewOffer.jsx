import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Offer from "../../components/TranportationRequest/Offer";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewOffer = () => {
  const { idShipment, idOffer } = useParams();
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const successOffer = useSelector((state) => state.offer.successOffer);
  const ArrayShipment = useSelector((state) => state.shipment.data);
  const navigate = useNavigate();
  const [offer, setoffer] = useState({});

  useEffect(() => {
    try {
      const a = ArrayShipment.find((x) => {
        return x.id === parseInt(idShipment);
      });
      const b = a.offers.find((x) => {
        return x.id === parseInt(idOffer);
      });
      setoffer(b);
    } catch {
      navigate("../myshipments");
    }
  }, []);

  if (driver) {
    return <Navigate to="../home/driver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }
  if (successOffer) {
    return <Navigate to="../notification/user/offerAccepted" />;
  }
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <Offer offer={offer} />
        </div>
      </div>
    </>
  );
};

export default ViewOffer;
