import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import PropTypes from "prop-types";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function SearchBar({ myMovies }) {
  const [searchText, setSearchText] = useState("");

  // Du coup, ce state n'est pas utile
  // Car tu peux le récupérer directement de myMovies.moviesTypehead
  // const [autoComplete, setAutoComplete] = useState([]);

  const handleChange = e => {
    myMovies.handleChangeSearchBar(e);

    // Ici tu map sur moviesTypehead
    // Mais la méthode qui met à jour (handleChangeSearchBar)
    // est asynchrone. Du coup myMovies.moviesTypehead est pas encore à jour
    // quand tu l'utilises
    //
    // Pas besoin de mettre à jour autoComplete
    // Il suffit d'attendre que myMovies soit mis à jour, et que SearchBar soit re-rendu
    // console.log({ collecMovies });
    // setAutoComplete(collecMovies);
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
        {/* Je ne suis pas sure de la pertinence d'utilise Typeahead */}
        {/* En effet, la recherche est faite directement via l'API */}
        {/* Et ce composant filtre aussi, ce qui fait que par exemple, "f" affiche 1O résultat et  "fr" 0, mais "fro" en effiche aussi 10 (en effet l'API semble filtrer pas que sur le nom mais Typeahead si ) */}
        <Typeahead
          id="searchBar"
          // Du coup ici on peux directement utiliser myMovies.moviesTypehead
          options={myMovies.moviesTypehead.map(movie => {
            return movie.title;
          })}
          minLength={1}
          placeholder="Quel est le film de vos rêves ?"
          // onChange={() => {
          //   handleChange();
          // }}
          onInputChange={handleChange}
          // onSearch={handleChange}
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
