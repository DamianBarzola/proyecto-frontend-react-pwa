import React from "react";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Request from "../components/TranportationRequest/Request";

const Shipment = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <Request />
        </div>
      </div>
    </>
  );
};

export default Shipment;
