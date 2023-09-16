import { React, useCallback, useState } from "react";
import "./styles/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import Spotify from "./API/SpotifyAPI";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState("New Playlist");
  const [track, setTrack] = useState([
    {
      name: "Listen Up",
      artist: "Oasis",
      album: "The Masterplan",
      id: Date.now(),
    },
    {
      name: "Don't Go Away",
      artist: "Oasis",
      album: "Be Here Now",
      id: Date.now() + 1,
    },
  ]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const AddTrack = (name, artist, album, id) => {
    setTrack((prevArray) => [
      ...prevArray,
      {
        name,
        artist,
        album,
        id,
      },
    ]);
  };

  //console.log(track);

  return (
    <div className="App">
      <SearchBar search={search} />
      <Playlist track={track} setTrack={setTrack} />
    </div>
  );
}

export default App;
