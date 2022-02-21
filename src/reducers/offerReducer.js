import { types } from "../types/types";

const initialState = {
  data: {},
};
export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.offerRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.offerAccepted:
      return {
        ...state,
        successOffer: action.payload,
      };
    case types.offerCreated:
      return {
        ...state,
        offerCreated: action.payload,
      };

    default:
      return state;
  }
};
