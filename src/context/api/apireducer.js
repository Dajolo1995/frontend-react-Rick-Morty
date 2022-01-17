import { API_CHARACTER, API_LOCATION } from "../../types";

const ApiReducer = (state, action) => {
  switch (action.type) {
    case API_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    default:
      return state;
  }
};

export default ApiReducer;
