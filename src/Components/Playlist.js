import { React, useState } from "react";
import Track from "./Track";

function Playlist(props) {
  console.log(props);

  const removeTrack = (id) => {
    props.setTrack(props.track.filter((track) => track.id !== id));
  };

  let Tracklist = props.track.map((data) => (
    <Track data={data} key={data.id} removeTrack={removeTrack} />
  ));

  return <div className="Playlist">{Tracklist}</div>;
}
export default Playlist;
