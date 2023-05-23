import axios from "axios";
import { types, url } from "../types/types";
import { newshipmentSuccess, offerAccepted } from "./offer";

export const createShipment = (data) => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .post(url + "/shipment/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        dispatch(newshipmentSuccess(true));
      })
      .catch((response) => {});
  };
};

export const readAvailableShipment = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/shipment/available", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};

export const readShipment = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/user/shipments/waiting_offers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};

export const readShipmentDriver = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/driver/offers/accepted", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};

export const readShipmentDeliveredDriver = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/driver/offers/delivered", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};



export const readShipmentInProgress = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
      .get(url + "/user/shipments/active", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};

export const readShipmentFinish = () => {
  let token = localStorage.getItem("jwt");
  return async (dispatch) => {
    await axios
    // /shipment/ ALGO
      .get(url + "/user/shipments/delivered", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(readShipments(data));
      })
      .catch((response) => {});
  };
};


export const acceptOffer = (id) => {
  let token = localStorage.getItem("jwt");
  let data = { id: id };
  return async (dispatch) => {
    await axios
      .put(url + "/offer/accept", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        dispatch(offerAccepted(true));
      })
      .catch((response) => {});
  };
};

export const finishShipment = (idShipment) => {
  let token = localStorage.getItem("jwt");
  let data = {
    shipmet: { payment: true },
    id: idShipment,
  };
  return async (dispatch) => {
    await axios
      .put(url + "/shipment/receive", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Shipment Finalizado");
      })
      .catch((response) => {});
  };
};


export const finishShipmentDriver = (idShipment) => {
  let token = localStorage.getItem("jwt");
  let data = {
    shipmet: { payment: true },
    id: idShipment,
  };
  return async (dispatch) => {
    await axios
      .put(url + "/shipment/deliver", data, {
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
