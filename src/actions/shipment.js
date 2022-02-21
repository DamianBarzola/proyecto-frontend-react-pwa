import axios from "axios";
import { types, url } from "../types/types";

export const createShipment = (data) => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  return async (dispatch) => {
    await axios
      .post(url + "/shipment/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Shipment Agregado");
      })
      .catch((response) => {});
  };
};

export const readAvailableShipment = () => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  return async (dispatch) => {
    await axios
      .get(url + "/shipment/getAvailableShipments", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};

export const readShipment = () => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  return async (dispatch) => {
    await axios
      .get(url + "/shipment/getMyShipments", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
        console.log(data);
      })
      .catch((response) => {});
  };
};

export const acceptOffer = (id) => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  let data = { id: id };
  return async (dispatch) => {
    await axios
      .put(url + "/offer/accept", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        alert("Oferta Aceptada");
      })
      .catch((response) => {});
  };
};

export const finishShipment = (idShipment) => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  let data = {
    shipmet: { payment: true },
    id: idShipment,
  };
  return async (dispatch) => {
    await axios
      .post(url + "/shipment/update", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Shipment Finalizado");
      })
      .catch((response) => {});
  };
};

export const create = (data) => {
  return {
    type: types.shipmentAdd,
    payload: data,
  };
};

export const readShipments = (data) => {
  return {
    type: types.shipmentRead,
    payload: data,
  };
};
export const deleteShipment = (id) => {
  return {
    type: types.deleteShipment,
    payload: id,
  };
};

export const updateShipment = (data) => {
  return {
    type: types.shipmentModify,
    payload: data,
  };
};

export const clearShipmentData = () => {
  return {
    type: types.clearShipmentData,
  };
};
