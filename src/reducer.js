import { INIT_PLAYLIST, UPDATE_SONG } from "./action";

const initialState = {
  playlist: [],
};

const playlist = (state = initialState, action) => {
  const { playlist } = state;
  switch (action.type) {
    case INIT_PLAYLIST:
      return {
        playlist: action.payload,
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
