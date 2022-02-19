import axios from "axios";
import { types, url } from "../types/types";

export const createOffer = (priceOffer, idShipment) => {
  let token = JSON.parse(localStorage.getItem("jwt"));
  let data = {
    offer: {
      price: parseInt(priceOffer),
    },
    id: idShipment,
  };
  return async (dispatch) => {
    await axios
      .post(url + "/offer/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        alert("Offer Creada");
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
