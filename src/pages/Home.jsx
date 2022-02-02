import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Offer from "../components/TranportationRequest/Offer";
import Request from "../components/TranportationRequest/Request";
import ViewMyRequests from "../components/TranportationRequest/ViewMyRequests";
import TransportationForm from "../components/TransportationForm/TransportationForm";
import styles from "../styles/Home.module.css";

const Home = () => {
  document.title = "Fleteros - Home";
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to="../login" />;
  }
  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBar />
        <div className="col-lg-7 ">
          <div className={styles.card}>
            <h1>Algo</h1>
          </div>
          {/* <TransportationForm /> */}
          {/* <ViewMyRequests />
          <Request />
          <Offer /> */}
        </div>
        <div className="col-lg-3">
          <div className={styles.card}>
            <h1>Algo</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
