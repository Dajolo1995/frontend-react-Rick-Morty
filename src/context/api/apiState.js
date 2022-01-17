import React, { useReducer } from "react";
import apiReducer from "./apireducer";
import apiContext from "./apiContext.js";
import apiAxios from "../../config/apiAxios";
import Swal from "sweetalert2";
import { API_CHARACTER, API_LOCATION } from "../../types";


const ApiState = (props) => {
  const initialState = {
    character: null,
    location: null,
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  const getCharacter = async (page) => {
    try {
      const res = await apiAxios.get(`/character?page=${page}`);
      console.log(res.data);
      dispatch({
        type: API_CHARACTER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <apiContext.Provider
      value={{
        character: state.character,
        location: state.location,
        getCharacter,
      }}
    >
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;
