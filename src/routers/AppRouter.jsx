import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Fotter from "../components/Footer/Footer";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterUser from "../pages/RegisterUser";
import RegisterDriver from "../pages/RegisterDriver";

const AppRouter = () => {
  const log = true;
  return (
    <div>
      <Router>
        <header>
          <NavBar props={log} />
        </header>
        <main style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              exact
              path="/home"
              element={!log ? <Home /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/login"
              element={log ? <Login /> : <Navigate to="/home" />}
            />
            <Route
              exact
              path="/register"
              element={log ? <Register /> : <Navigate to="/home" />}
            />
            <Route exact path="/register/user" element={<RegisterUser />} />
            <Route exact path="/register/driver" element={<RegisterDriver />} />
          </Routes>
        </main>
        <footer>
          <Fotter />
        </footer>
      </Router>
    </div>
  );
};

export default AppRouter;
