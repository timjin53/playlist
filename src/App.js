import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { connect } from "react-redux";

import PlayList from "./Playlist";
import "./App.css";
import { initPlaylist, addFav, removeFav } from "./action";

function App({ playlist, initPlaylist, addFav, removeFav }) {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/playlist");
      initPlaylist(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Grid container spacing={10}>
        <Grid item xs={8} md={4} lg={3}>
          <PlayList
            listName="Favorite"
            playlist={playlist}
            addFav={addFav}
            removeFav={removeFav}
          />
        </Grid>
        <Grid item xs={8} md={4} lg={3}>
          <PlayList
            listName="Listened"
            playlist={playlist}
            addFav={addFav}
            removeFav={removeFav}
          />
        </Grid>
        <Grid item xs={8} md={4} lg={3}>
          <PlayList
            listName="Playlist"
            playlist={playlist}
            addFav={addFav}
            removeFav={removeFav}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ playlist }) => ({
  playlist,
});

const mapDispatchToProps = (dispatch) => ({
  initPlaylist: (data) => dispatch(initPlaylist(data)),
  addFav: (id) => dispatch(addFav(id)),
  removeFav: (id) => dispatch(removeFav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
