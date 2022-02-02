import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.loginUser:
      return action.payload;
    case types.logoutUser:
      return {};
    case types.logMsgUser:
      return action.payload;
    default:
      return state;
  }
};
