import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return action.payload;
    case types.logout:
      return {};
    case types.logMsg:
      return action.payload;

    default:
      return state;
  }
};
