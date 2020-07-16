import axios from "axios";

export const INIT_PLAYLIST_REQUEST = "INIT_PLAYLIST_REQUEST";
export const INIT_PLAYLIST_SUCCESS = "INIT_PLAYLIST_SUCCESS";
export const INIT_PLAYLIST_FAILURE = "INIT_PLAYLIST_FAILURE";
export const UPDATE_SONG = "UPDATE_SONG";

export const initPlaylist = () => {
  return (dispatch) => {
    dispatch(initPlaylistRequest());

    axios
      .get("http://localhost:3000/playlist")
      .then(({ data }) => dispatch(initPlaylistSuccess(data)))
      .catch((err) => {
        dispatch(initPlaylistFailure(err));
      });
  };
};

const initPlaylistRequest = () => ({
  type: INIT_PLAYLIST_REQUEST,
});

const initPlaylistSuccess = (data) => ({
  type: INIT_PLAYLIST_SUCCESS,
  payload: data,
});

const initPlaylistFailure = (err) => ({
  type: INIT_PLAYLIST_FAILURE,
  payload: err,
});

export const updateSong = (id, key, value) => ({
  type: UPDATE_SONG,
  payload: {
    id,
    key,
    value,
  },
});
