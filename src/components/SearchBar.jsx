import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "../exampleData";

import "react-bootstrap-typeahead/css/Typeahead.css";

export default function SearchBar({ sendSearchText }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = e => {
    //console.log(e);
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendSearchText(searchText);
  };

  return (
    <div className="row">
      {/*
      <Typeahead
        labelKey="name"
        options={options}
        placeholder="Choose a state..."
        onChange={handleChange}
        value={searchText}
      />
      */}

      <div className="col8">
        <div className="input-group">
          <input
            className="form-control input-lg"
            type="text"
            onChange={handleChange}
            value={searchText}
            placeholder="Choisissez un film"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              onClick={handleSubmit}
              type="button"
            >
              Go !
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  sendSearchText: PropTypes.func.isRequired
};
