import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBarDriver from "../../components/NavigationBar/NavigationBarDriver";
import styles from "../../styles/Home.module.css";
import { readOffer } from "../../actions/offer";

const MyOffersDriver = () => {
  document.title = "Fleteros - Mis Ofertas";
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();

  const offers = useSelector((state) => state.shipment.data);
  useEffect(() => {
    dispatch(readOffer());
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

export default MyOffersDriver;
