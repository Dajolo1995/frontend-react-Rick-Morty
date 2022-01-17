import { AUTH_OK, AUTH_ERROR, CERRAR_SESION, DELETE_MSG } from "../../types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_OK:
      return {
        ...state,
        user: action.payload,
        auth: true,
        cExito: null,
        msg: null,
      };

    case AUTH_ERROR:
      return {
        ...state,
        msg: action.payload,
      };

    case DELETE_MSG:
      return {
        msg: null,
      };

      case CERRAR_SESION:
        return {
          ...state,
          user: null,
          auth: null,
        };
    default:
      return state;
  }
};
