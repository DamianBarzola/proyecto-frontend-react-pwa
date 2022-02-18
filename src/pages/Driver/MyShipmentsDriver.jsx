import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import { readShipment } from "../../actions/shipment";

const MyShipmentsDriver = () => {
  document.title = "Fleteros - Mis viajes";
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readShipment());
  }, [dispatch]); 
   if (!driver) {
    return <Navigate to="../login/driver" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBarDriver />
       
      </div>
    </>
  );
};

export default MyShipmentsDriver;
