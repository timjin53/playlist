import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";

import PlayList from "./Playlist";
import "./App.css";
import { initPlaylist, updateSong } from "./action";
import { favouriteSelector, listenedSelector } from "./selector";

function App({
  playlist,
  initPlaylist,
  updateSong,
  favouritePlaylist,
  listenedPlaylist,
  error,
  status,
}) {
  useEffect(() => {
    initPlaylist();
  }, []);

  return (
    <div className="App">
      <Grid container spacing={10}>
        <Grid item xs={12} md={4}>
          <PlayList
            listName="Favorite"
            playlist={favouritePlaylist}
            updateSong={updateSong}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PlayList
            listName="Listened"
            playlist={listenedPlaylist}
            updateSong={updateSong}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PlayList
            listName="Playlist"
            playlist={playlist}
            updateSong={updateSong}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ playlist, status, error }) => ({
  playlist,
  favouritePlaylist: favouriteSelector(playlist),
  listenedPlaylist: listenedSelector(playlist),
  status,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  initPlaylist: () => initPlaylist()(dispatch),
  updateSong: (id, key, value) => dispatch(updateSong(id, key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
