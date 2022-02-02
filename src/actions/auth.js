import axios from "axios";
import { types, url } from "../types/types";

export const userlogin = (email, password) => {
  const datos = { email: email, password: password };
  return (dispatch) => {
    axios
      .post(url + "/auth/signin", datos)
      .then(({ data }) => {
        localStorage.setItem("jwt", JSON.stringify(data.token));
        dispatch(login(data.user));
      })
      .catch(({ response }) => {
        if (response) {
          if (response.status === 400) {
            dispatch(errorMsg("Correo electrónico o contraseña incorrecta"));
            // console.log(response.data.error); con esto se ve el mensaje que envia el back
          } //no se si va otro if
        } else {
          dispatch(
            errorMsg(
              "Problema de Conexión. Vuelva a intentarlo en unos minutos"
            )
          );
        }
      });
  };
};

export const driverlogin = (email, password) => {
  const datos = { email: email, password: password };
  return (dispatch) => {
    axios
      .post(url + "/auth/signin/driver", datos)
      .then(({ data }) => {
        localStorage.setItem("jwt", JSON.stringify(data.token));
        dispatch(login(data.user));
      })
      .catch(({ response }) => {
        if (response) {
          if (response.status === 400) {
            dispatch(errorMsg("Correo electrónico o contraseña incorrecta"));
          } //no se si va otro if
        } else {
          dispatch(
            errorMsg(
              "Problema de Conexión. Vuelva a intentarlo en unos minutos"
            )
          );
        }
      });
  };
};

export const getUser = (token) => {
  return (dispatch) => {
    axios
      .get(url + "/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(login(data));
      })
      .catch((error) => {
        localStorage.removeItem("jwt");
        dispatch(logout());
        dispatch(errorMsg("Problema de Conexion"));
      });
  };
};

export const signUp = (data) => {
  return (dispatch) => {
    axios
      .post(url + "/auth/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch(({ response }) => {
        if (response) {
          if (response.status === 400) {
            dispatch(errorMsg("Correo electrónico ya registrado"));
          }
        } else {
          dispatch(
            errorMsg(
              "Problema de Conexión. Vuelva a intentarlo en unos minutos"
            )
          );
        }
      });
  };
};

export const signOut = (token) => {
  return (dispatch) => {
    axios
      .get(url + "/auth/signout", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(logout());
      })
      .catch((error) => {
        dispatch(errorMsg("Problema de Conexion"));
      });
  };
};

export const login = (user) => {
  return {
    type: types.loginUser,
    payload: {
      user,
    },
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: types.logoutUser });
  };
};

export const errorMsg = (msg) => {
  return (dispatch) => {
    dispatch({ type: types.logMsgUser, payload: { msg: msg } });
  };
};
