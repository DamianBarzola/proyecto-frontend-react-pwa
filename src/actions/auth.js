import axios from "axios";
import { types, url } from "../types/types";

/*------------------------------User------------------------------*/

export const userlogin = (email, password) => {
  const datos = { email: email, password: password };
  return async (dispatch) => {
    await axios
      .post(url + "/user/signin", datos)
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

export const getUser = (token) => {
  return async (dispatch) => {
    await axios
      .get(url + "/getMe", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async ({ data }) => {
        if (data.license) {
          await dispatch(loginDriver(data));
        } else {
          await dispatch(login(data));
        }
      })
      .catch((error) => {
        localStorage.removeItem("jwt");
        dispatch(logout());
      });
  };
};
export const signUp = (data) => {
  return async (dispatch) => {
    dispatch(logSuccess(false));
    await axios
      .post(url + "/user/signup", data)
      .then((res) => {
        // console.log(res);
        dispatch(logSuccess(true));
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
  return async (dispatch) => {
    await axios
      .get(url + "/user/signout", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        localStorage.removeItem("jwt");
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

/*------------------------------Driver------------------------------*/

export const driverlogin = (email, password) => {
  const datos = { email: email, password: password };
  return async (dispatch) => {
    await axios
      .post(url + "/driver/signin", datos)
      .then(({ data }) => {
        localStorage.setItem("jwt", JSON.stringify(data.token));
        dispatch(loginDriver(data.driver));
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

export const signUpDriver = (data, license, greenCard) => {
  const fdlicense = new FormData();
  fdlicense.append("file", license);
  fdlicense.append("upload_preset", "pnva2kin");

  const fdgreeCard = new FormData();
  fdgreeCard.append("file", greenCard);
  fdgreeCard.append("upload_preset", "pnva2kin");

  return async (dispatch) => {
    dispatch(logSuccess(false));
    await axios
      .post("https://api.cloudinary.com/v1_1/da7kbso2t/image/upload", fdlicense)
      .then(async (res) => {
        data.license = res.data.url;
        await axios
          .post(
            "https://api.cloudinary.com/v1_1/da7kbso2t/image/upload",
            fdgreeCard
          )
          .then((res) => {
            data.greenCard = res.data.url;
          })
          .catch((e) => {
            dispatch(errorMsg("Error de Carga"));
          });
      })
      .catch((e) => {
        dispatch(errorMsg("Error de Carga"));
      });
    if (data.greenCard !== "" && data.license !== "") {
      axios
        .post(url + "/driver/signup", data)
        .then((res) => {
          dispatch(logSuccess(true));
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
    } else {
      dispatch(
        errorMsg(
          "Problema al cargar los archivos. Vuelva a intentarlo en unos minutos"
        )
      );
    }
  };
};
export const signOutDriver = (token) => {
  return async (dispatch) => {
    await axios
      .get(url + "/driver/signout", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        localStorage.removeItem("jwt");
        dispatch(logout());
      })
      .catch((error) => {
        dispatch(errorMsg("Problema de Conexion"));
      });
  };
};

export const loginDriver = (driver) => {
  return {
    type: types.loginDriver,
    payload: {
      driver,
    },
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: types.logout });
  };
};

export const errorMsg = (msg) => {
  return (dispatch) => {
    dispatch({ type: types.logMsg, payload: msg });
  };
};
export const logSuccess = (state) => {
  return (dispatch) => {
    dispatch({ type: types.logSuccess, payload: state });
  };
};
