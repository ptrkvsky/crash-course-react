import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import PropTypes from "prop-types";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function SearchBar({
  sendSearchText,
  sendHandleChange,
  tabMovieTypehead
}) {
  const [searchText, setSearchText] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const handleChange = e => {
    sendHandleChange(searchText);
    const collecMovies = tabMovieTypehead.map(movie => {
      const objMovie = { name: movie.title };
      return objMovie;
    });
    setAutoComplete(collecMovies);
    setSearchText(e);
  };

  const handleSubmit = e => {
    console.log(handleSubmit);
    sendSearchText(document.querySelector(".rbt-input-main").value);
    e.preventDefault();
  };

  return (
    <form id="mysearchbar" onSubmit={handleSubmit}>
      <div className="input-group mb-3 searchbar">
        <Typeahead
          {...searchText}
          id="searchBar"
          labelKey="name"
          options={autoComplete}
          minLength={3}
          placeholder="Quel est le film de vos rêves ?"
          onInputChange={handleChange}
          onSearch={handleChange}
          multiple={false}
          value={searchText}
        />
        <span className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            GO GO GO !
          </button>
        </span>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  sendSearchText: PropTypes.func.isRequired,
  sendHandleChange: PropTypes.func.isRequired,
  tabMovieTypehead: PropTypes.array.isRequired
};
