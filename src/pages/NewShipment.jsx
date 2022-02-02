import React from "react";
import TransportationForm from "../components/TransportationForm/TransportationForm";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar/NavigationBar";
const NewShipment = () => {
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
