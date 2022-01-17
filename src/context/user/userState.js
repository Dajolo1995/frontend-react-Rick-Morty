import React, { useReducer } from "react";
import { userReducer } from "./userReducer";
import userContext from "./userContext";
import clienteAxios from "../../config/clienteAxios";
import { CREATE_USER, CREATE_USER_ERROR } from "../../types";
// import { useNavigate } from "react-router-dom";
import credentials from "../../services";

const UserState = (props) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const registerUser = async (datos) => {
    try {
      // let navigate = useNavigate();
      const res = await clienteAxios.post("/user", datos);

      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
      // navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        registerUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
