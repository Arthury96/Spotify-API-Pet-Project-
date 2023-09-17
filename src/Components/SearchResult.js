import React from "react";

import Tracklist from "./Tracklist";

function searchResults(props) {
  console.log(props);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={props.searchResults} addTrack={props.addTrack} />
    </div>
  );
}
a;
export default searchResults;
