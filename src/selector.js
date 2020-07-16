export const favouriteSelector = (playlist) => {
  return playlist.filter(({ favourite }) => favourite);
};

export const listenedSelector = (playlist) => {
  return playlist.filter(({ listened }) => listened);
};
