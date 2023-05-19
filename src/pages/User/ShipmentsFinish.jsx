import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ViewFinish from "../../components/ShipFinish/ViewFinish";
import { useDispatch, useSelector } from "react-redux";
import { readShipmentFinish } from "../../actions/shipment";
import { Navigate } from "react-router-dom";

const ShipmentsFinish = () => {
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();

  const shipments = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readShipmentFinish());
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
        <div className="col-12 d-flex justify-content-center ps-0">
          <ViewFinish shipments={shipments} />
        </div>
      </div>
    </>
  );
};

export default ShipmentsFinish;
