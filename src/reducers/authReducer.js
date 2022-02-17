import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.loginUser:
      return { ...state, user: action.payload };
    case types.loginDriver:
      return { ...state, driver: action.payload };
    case types.logout:
      return {};
    case types.logMsg:
      return { ...state, msg: action.payload };
    default:
      return state;
  }
};
