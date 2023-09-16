import React, { useCallback, useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Type a song you want"
        onChange={handleTermChange}
      ></input>
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}

export default SearchBar;
