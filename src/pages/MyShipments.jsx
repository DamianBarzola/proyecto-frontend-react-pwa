import React from "react";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ViewMyRequests from "../components/TranportationRequest/ViewMyRequests";
const MyShipments = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <ViewMyRequests />
        </div>
      </div>
    </>
  );
};

export default MyShipments;
