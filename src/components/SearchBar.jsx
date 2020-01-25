import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";
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
      const objMovie = { name: movie.original_title };
      return objMovie;
    });
    setAutoComplete(collecMovies);
    setSearchText(e);
  };

  const handleSubmit = e => {
    sendSearchText(document.querySelector(".rbt-input-main").value);
    e.preventDefault();
  };

  console.log(searchText);
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <Typeahead
              {...searchText}
              id="searchBar"
              labelKey="name"
              options={autoComplete}
              minLength="4"
              placeholder="Choisir un film"
              onInputChange={handleChange}
              onSearch={handleChange}
              multiple={false}
              value={searchText}
            />
            <span className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Go !
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  sendSearchText: PropTypes.func.isRequired,
  sendHandleChange: PropTypes.func.isRequired,
  tabMovieTypehead: PropTypes.array.isRequired
};
