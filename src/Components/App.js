import { React, useState } from "react";
//import "./SearchBar.js";
import "./styles/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";

function App() {
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
      <SearchBar />
      <Playlist track={track} setTrack={setTrack} />
    </div>
  );
}

export default App;
