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

    default:
      return state;
  }
};
