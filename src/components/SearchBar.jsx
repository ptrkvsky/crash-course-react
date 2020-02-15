import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import PropTypes from "prop-types";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function SearchBar({ myMovies }) {
  const [searchText, setSearchText] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const handleChange = e => {
    myMovies.handleChangeSearchBar(e);
    const collecMovies = myMovies.moviesTypehead.map(movie => {
      const objMovie = { name: movie.title };
      return objMovie;
    });
    console.log({ collecMovies });
    setAutoComplete(collecMovies);
    setSearchText(e);
  };

  const handleSubmit = e => {
    myMovies.handleSubmitSearchBar(
      document.querySelector(".rbt-input-main").value
    );
    e.preventDefault();
  };

  return (
    <form id="mysearchbar" onSubmit={handleSubmit}>
      <div className="input-group mb-3 searchbar">
        <Typeahead
          id="searchBar"
          labelKey="name"
          options={autoComplete}
          minLength={1}
          placeholder="Quel est le film de vos rêves ?"
          onChange={() => {
            handleChange();
          }}
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
  myMovies: PropTypes.object.isRequired,
  tabMovieTypehead: PropTypes.array.isRequired
};
