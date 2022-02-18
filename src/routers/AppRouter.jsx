import React, { Suspense, useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Fotter from "../components/Footer/Footer";
import Home from "../pages/User/Home";
import Landing from "../pages/Landing";
import LoginUser from "../pages/LoginUser";
import Register from "../pages/Register";
import RegisterUser from "../pages/RegisterUser";
import RegisterDriver from "../pages/RegisterDriver";
import LoginDriver from "../pages/LoginDriver";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../actions/auth";
import NewShipment from "../pages/User/NewShipment";
import MyShipments from "../pages/User/MyShipments";
import ViewOffer from "../pages/User/ViewOffer";
import Shipment from "../pages/User/Shipment";
import HomeDriver from "../pages/Driver/HomeDriver";
import ShipmentsInProgress from "../pages/User/ShipmentsInProgress";
import MyOffersDriver from "../pages/Driver/MyOffersDriver";
import MyShipmentsDriver from "../pages/Driver/MyShipmentsDriver";
import SearchShipments from "../pages/Driver/SearchShipments";

import { readShipment } from "../actions/shipment";


const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("jwt"));

    if (token !== null) {
      // try {
      dispatch(getUser(token));

      // } catch (error) {
      //   console.log("pasaron cosas");
      // }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/login/driver" element={<LoginDriver />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register/user" element={<RegisterUser />} />
          <Route exact path="/register/driver" element={<RegisterDriver />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/newshipment" element={<NewShipment />} />
          <Route exact path="/myshipments" element={<MyShipments />} />
          <Route exact path="/shipment/:idShipment" element={<Shipment />} />
          <Route
            exact
            path="/shipmentsinprogress"
            element={<ShipmentsInProgress />}
          />
          <Route
            exact
            path="/offer/:idShipment/:idOffer"
            element={<ViewOffer />}
          />
          <Route exact path="/offer" element={<ViewOffer />} />
          <Route exact path="/home/driver" element={<HomeDriver />} />
          <Route exact path="/offer/driver" element={<MyOffersDriver />} />
          <Route exact path="/myshipments/driver" element={<MyShipmentsDriver />} />
          <Route exact path="/shipments/driver" element={<SearchShipments />} />
        </Routes>
      </main>
      {/* <footer>
        <Fotter />
      </footer> */}
    </div>
  );
};

export default AppRouter;
