import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import { readAvailableShipment } from "../../actions/shipment";
import ViewShipments from "../../components/SearchShipment/ViewShipments";

const SearchShipments = () => {
  document.title = "Fleteros - Viajes Disponibles";
  const driver = useSelector((state) => state.auth.driver);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readAvailableShipment());
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
        <div className="col-12 ">
          <ViewShipments shipments={shipments} />
        </div>
      </div>
    </>
  );
};

export default SearchShipments;
