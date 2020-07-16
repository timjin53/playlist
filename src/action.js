export const INIT_PLAYLIST = "INIT_PLAYLIST";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const initPlaylist = (data) => ({
  type: INIT_PLAYLIST,
  payload: data,
});

export const addFav = (id) => ({
  type: ADD_FAV,
  id,
});

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  id,
});
