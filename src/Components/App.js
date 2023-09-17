import { React, useCallback, useState } from "react";
import "./styles/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import Spotify from "./API/SpotifyAPI";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState("New Playlist");
  const [track, setTrack] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = (track) => {
    if (track.some((savedTrack) => savedTrack.id === track.id)) return;

    setTrack((prevTracks) => [...prevTracks, track]);
  };

  const savePlaylist = () => {
    const trackUris = track.map((track) => track.uri);
    Spotify.savePlaylist(playlist, trackUris).then(() => {
      setPlaylist("New Playlist");
      setTrack([]);
    });
  };

  //console.log(track);

  return (
    <div className="App">
      <SearchBar search={search} />
      <searchResults searchResults={searchResults} addTrack={addTrack} />

      <Playlist track={track} setTrack={setTrack} />
    </div>
  );
}

export default App;
