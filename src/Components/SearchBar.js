import React, { useCallback, useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    props.search(term);
  }, [props.search, term]);

  console.log(search);

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Type a song you want"
        onChange={handleTermChange}
      ></input>
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
