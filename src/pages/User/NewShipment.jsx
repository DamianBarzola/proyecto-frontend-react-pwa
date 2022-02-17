import React from "react";
import TransportationForm from "../../components/TransportationForm/TransportationForm";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const NewShipment = () => {
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);

  if (driver) {
    return <Navigate to="../homedriver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <TransportationForm />
        </div>
      </div>
    </>
  );
};

export default NewShipment;
