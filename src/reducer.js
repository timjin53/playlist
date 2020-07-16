import {
  UPDATE_SONG,
  INIT_PLAYLIST_REQUEST,
  INIT_PLAYLIST_SUCCESS,
  INIT_PLAYLIST_FAILURE,
} from "./action";

const initialState = {
  status: "uninit",
  error: null,
  playlist: [],
};

const playlist = (state = initialState, action) => {
  const { playlist } = state;
  switch (action.type) {
    case INIT_PLAYLIST_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case INIT_PLAYLIST_SUCCESS:
      return {
        ...state,
        status: "success",
        playlist: action.payload,
      };
    case INIT_PLAYLIST_FAILURE:
      return {
        ...state,
        status: "failure",
        error: action.payload,
      };
    case UPDATE_SONG:
      const { id, key, value } = action.payload;
      return {
        playlist: playlist.map((song) => {
          if (song.id === id)
            return {
              ...song,
              [key]: value,
            };

          return song;
        }),
      };
    default:
      return state;
  }
};

export default playlist;
