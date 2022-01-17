import { SHOW_ALERT, HIDE_ALERT } from "../../types";

const Reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        alerta: action.payload,
      };

      case HIDE_ALERT: 
      return {
         
          alerta:null
      }

    default:
      return state;
  }
};

export default Reducer;
