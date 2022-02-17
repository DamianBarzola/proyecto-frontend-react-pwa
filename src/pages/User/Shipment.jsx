import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Request from "../../components/TranportationRequest/Request";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Shipment = () => {
  const { idShipment } = useParams();
  const user = useSelector((state) => state.auth.user);
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
      navigate("../myshipments");
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <Request shipment={shipment} />
        </div>
      </div>
    </>
  );
};

export default Shipment;
