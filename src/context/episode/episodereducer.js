import {
  CREATE_EPISODE,
  GET_EPISODE,
  GET_EPISODE_ID,
  UPDATED_EPISODE,
  DELETE_EPISODE,
} from "../../types";

export const episodeReducer = (state, action) => {
  switch (action.type) {
    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };
    case GET_EPISODE_ID:
      return {
        ...state,
        episodeId: action.payload,
      };
    case CREATE_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };

    default:
      return state;
  }
};
