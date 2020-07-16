import { INIT_PLAYLIST, ADD_FAV, REMOVE_FAV } from "./action";

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
    case ADD_FAV:
      return {
        playlist: playlist.map((song) => {
          if (song.id === action.id)
            return {
              ...song,
              favourite: true,
            };

          return song;
        }),
      };
    case REMOVE_FAV:
      return {
        playlist: playlist.map((song) => {
          if (song.id === action.id)
            return {
              ...song,
              favourite: false,
            };

          return song;
        }),
      };
    default:
      return state;
  }
};

export default playlist;
