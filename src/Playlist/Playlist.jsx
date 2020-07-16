import React from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Playlist = ({ listName, playlist, addFav, removeFav }) => {
  console.log(playlist);
  return (
    <Box>
      <Typography variant="h3" component="h2">
        {listName}
      </Typography>
      {playlist.map(({ id, artist, track, favourite }) => (
        <div key={id}>
          {`${id} ${artist} ${track}`}
          {favourite ? (
            <IconButton aria-label="favorite" onClick={() => removeFav(id)}>
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="favorite-border" onClick={() => addFav(id)}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
        </div>
      ))}
    </Box>
  );
};

export default Playlist;
