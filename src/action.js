export const INIT_PLAYLIST = "INIT_PLAYLIST";
export const UPDATE_SONG = "UPDATE_SONG";

export const initPlaylist = (data) => ({
  type: INIT_PLAYLIST,
  payload: data,
});

export const updateSong = (id, key, value) => ({
  type: UPDATE_SONG,
  payload: {
    id,
    key,
    value,
  },
});
