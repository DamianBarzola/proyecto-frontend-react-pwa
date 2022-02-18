import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ViewInProgress from "../../components/ShipInProgress/ViewInProgress";
import { useDispatch, useSelector } from "react-redux";
import { readShipment } from "../../actions/shipment";
import { Navigate } from "react-router-dom";

const ShipmentsInProgress = () => {
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readShipment());
  }, [dispatch]);

  if (driver) {
    return <Navigate to="../home/driver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <ViewInProgress shipments={shipments} />
        </div>
      </div>
    </>
  );
};

export default ShipmentsInProgress;
