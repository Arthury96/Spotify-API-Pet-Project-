import React, { useState } from "react";

function Track(props) {
  console.log(props);

  return (
    <div>
      <p>
        {props.data.artist} - {props.data.name}
      </p>
      <p>{props.data.album}</p>
      <button onClick={() => props.removeTrack(props.data.id)}>X</button>
    </div>
  );
}

export default Track;
