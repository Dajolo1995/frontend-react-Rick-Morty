import React, { useReducer } from "react";
import { episodeReducer } from "./episodereducer";
import episodeContext from "./episodeContext";
import clienteAxios from "../../config/clienteAxios";
import credential from "../../services";

import {
  CREATE_EPISODE,
  GET_EPISODE,
  GET_EPISODE_ID,
  UPDATED_EPISODE,
  DELETE_EPISODE,
} from "../../types";

const EpisodeState = (props) => {
  const initialState = {
    episode: [],
    episodeId: [],
  };

  const [state, dispatch] = useReducer(episodeReducer, initialState);

  const getEpisode = async () => {
    try {
      const res = await clienteAxios.get("/episode", {
        headers: {
          Authorization: credential.getToken(),
        },
      });


      dispatch({
        type: GET_EPISODE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getEpisodeId = async (id) => {
    try {
      const res = await clienteAxios.get(`/episode/${id}`, {
        headers: {
          Authorization: credential.getToken(),
        },
      });
      dispatch({
        type: GET_EPISODE_ID,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createEpisode = async (datos) => {
    try {
      console.log(datos);
      const res = await clienteAxios.post("/episode", datos, {
        headers: {
          Authorization: credential.getToken(),
        },
      });

      getEpisode();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEpisode = async (id) => {
    try {
      const res = await clienteAxios.delete(`/episode/${id}`, {
        headers: {
          Authorization: credential.getToken(),
        },
      });
      getEpisode();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <episodeContext.Provider
      value={{
        episode: state.episode,
        episodeId: state.episodeId,
        getEpisode,
        getEpisodeId,
        createEpisode,
        deleteEpisode
      }}
    >
      {props.children}
    </episodeContext.Provider>
  );
};

export default EpisodeState;
