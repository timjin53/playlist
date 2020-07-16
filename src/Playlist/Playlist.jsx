import React from "react";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HeadsetIcon from "@material-ui/icons/Headset";

const Playlist = ({ listName, playlist, updateSong }) => {
  return (
    <Box>
      <Typography variant="h3" component="h2">
        {listName}
      </Typography>
      {playlist.map(({ id, artist, track, favourite, listened }) => (
        <div key={id}>
          {`${id} ${artist} ${track}`}
          {favourite ? (
            <IconButton
              aria-label="favourite"
              onClick={() => updateSong(id, "favourite", false)}
            >
              <FavoriteIcon color="secondary" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="not favourite"
              onClick={() => updateSong(id, "favourite", true)}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}
          {listened ? (
            <IconButton
              aria-label="listened"
              onClick={() => updateSong(id, "listened", false)}
            >
              <HeadsetIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="not listened"
              onClick={() => updateSong(id, "listened", true)}
            >
              <HeadsetIcon />
            </IconButton>
          )}
        </div>
      ))}
    </Box>
  );
};

export default Playlist;
