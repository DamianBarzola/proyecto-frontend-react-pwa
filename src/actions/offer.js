
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


export const readOffer = () => {
    let token = JSON.parse(localStorage.getItem("jwt"));
    return async (dispatch) => {
      await axios
        .get(url + "/offer/getMyOffers", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
            console.log(data)
            dispatch(readOffers(data));
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


export const readOffers = (data) => {
  return {
    type: types.offerRead,
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