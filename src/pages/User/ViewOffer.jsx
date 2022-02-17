import React from "react";
import styles from "../../styles/Home.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Offer from "../../components/TranportationRequest/Offer";

const ViewOffer = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <div className="col-12 ">
          <Offer />
        </div>
      </div>
    </>
  );
};

export default ViewOffer;
