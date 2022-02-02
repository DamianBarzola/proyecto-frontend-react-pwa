import axios from "axios";
import { types } from "../types/types";

export const driverlogin = (email, password) => {
  const datos = { email: email, password: password };
  return (dispatch) => {
    axios
      .post("/auth/signin/driver", datos)
      .then(function (res) {
        localStorage.setItem("user", JSON.stringify(res.token));
        dispatch(login(res.fullname, res.email));
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(errorMsg("Datos Incorrectos"));
      });
  };
};

export const driverSignUp = (dato1, dato2) => {
  const datos = { dato1: dato1, dato2: dato2 };
  return (dispatch) => {
    axios
      .post("/auth/signup/driver", datos)
      .then(function (res) {
        // dispatch(login(res.fullname, res.email));
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(errorMsg("Datos Incorrectos"));
      });
  };
};

export const login = (fullname, email) => {
  return {
    type: types.loginDriver,
    payload: {
      fullname,
      email,
    },
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: types.logoutDriver });
  };
};

export const errorMsg = (msg) => {
  return (dispatch) => {
    dispatch({ type: types.logMsgDriver, payload: { msg: msg } });
  };
};
