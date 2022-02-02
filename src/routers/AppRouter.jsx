import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Fotter from "../components/Footer/Footer";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import LoginUser from "../pages/LoginUser";
import Register from "../pages/Register";
import RegisterUser from "../pages/RegisterUser";
import RegisterDriver from "../pages/RegisterDriver";
import LoginDriver from "../pages/LoginDriver";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../actions/auth";
import { useSelector } from "react-redux";
import NewShipment from "../pages/NewShipment";
import MyShipments from "../pages/MyShipments";
import ViewOffer from "../pages/ViewOffer";
import Shipment from "../pages/Shipment";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("jwt"));

    if (token !== null) {
      try {
        dispatch(getUser(token));
      } catch (error) {
        console.log("pasaron cosas");
      }
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
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/login/driver" element={<LoginDriver />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register/user" element={<RegisterUser />} />
          <Route exact path="/register/driver" element={<RegisterDriver />} />
          <Route exact path="/newshipment" element={<NewShipment />} />
          <Route exact path="/myshipments" element={<MyShipments />} />
          <Route exact path="/offer" element={<ViewOffer />} />
          <Route exact path="/shipment" element={<Shipment />} />
        </Routes>
      </main>
      {/* <footer>
        <Fotter />
      </footer> */}
    </div>
  );
};

export default AppRouter;
