import React, { useReducer } from "react";
import { authReducer } from "./authReducer";
import authContext from "./authContext";
import clienteAxios from "../../config/clienteAxios";
import { AUTH_OK, AUTH_ERROR, CERRAR_SESION, DELETE_MSG } from "../../types";
import Swal from "sweetalert2";

const AuthState = (props) => {
  const initialState = {
    user: null,
    auth: null,
    editUser: null,
    cExito: null,
    validate: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  //login
  const login = async (datos) => {
    try {
      const res = await clienteAxios.post("/auth", datos);
      dispatch({
        type: AUTH_OK,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.msg,
      });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo o la contraseña son incorrectos, por favor revise sus credenciales",
      });
      setTimeout(() => {
        dispatch({
          type: DELETE_MSG,
        });
      }, 3000);
    }
  };

  const cerrar = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        auth: state.auth,
        editUser: state.editUser,
        cExito: state.cExito,
        validate: state.validate,
        msg: state.msg,
        login,
        cerrar
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
