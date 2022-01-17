import { CREATE_USER } from "../../types";

export const userReducer = (state, action) => {
  switch (action.type) {
      case CREATE_USER:
      return{
        ...state
      }
    default:
      return state;
  }
};
