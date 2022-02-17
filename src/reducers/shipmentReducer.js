import { types } from "../types/types";

const initialState = {
  data: {},
};
export const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.shipmentAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.shipmentRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.shipmentModify:
      const indexUpd = state.data.findIndex(
        (shipment) => shipment.id === action.payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, indexUpd),
          action.payload,
          ...state.data.slice(indexUpd + 1),
        ],
      };

    case types.shipmentDelete:
      return {
        ...state,
        data: state.data.filter((shipment) => {
          return shipment.id !== action.payload;
        }),
      };
    case types.shipmentClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
