import React, { useState, useEffect } from "react";
//Components
import VideoList from "./VideoList";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import Video from "../components/Video";
import Header from "./Header";

// Lib + helpers
import axios from "axios";
import isEmpty from "../utils/isEmpty";
import getRandom from "../utils/getRandom";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "@emotion/styled";

const PrimeVideo = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 60px 0;
  grid-gap: 60px;
`;

// Démarrage application
export default function App() {
  const [movies, setMovies] = useState([]); // Most popular movies
  const [keyPrimeMovie, setPrimeMovieKey] = useState({});
  const [primeMovie, setPrimeMovie] = useState([]); // List of 5 movies after the most popular
  const [moviesTypehead, setMoviesTypehead] = useState([]); // List of 5 movies after the most popular
  const [basket, setBasket] = useState([]); // Collection Of Object

  // API URL
  const API_END_POINT = "https://api.themoviedb.org/3/";
  const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&page=1";
  const SEARCH_URL = "search/movie/?language=fr&include_adult=false";
  const API_KEY = "api_key=383fad9661a33d6164b48dd1309a05cd";

  // Requet API. Want to know more ? https://www.robinwieruch.de/react-hooks-fetch-data
  // Function that fetch current popular movies and set a primemovie(with trailer)
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios(
          `${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`
        );

        const popularMovies = res.data.results.slice(1, 6);
        // Add random price to movie between 20 and 30
        popularMovies.map(movie => {
          return (movie.price = getRandom(20, 30));
        });

        setMovies(popularMovies);

        const tabPrimeMovie = res.data.results.slice(0, 1);
        setPrimeMovie(tabPrimeMovie[0]);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    fetchMovies();
  }, []);

  // Second function that get a movie
  useEffect(() => {
    async function setVideoKey(movie) {
      try {
        const res = await axios(
          `${API_END_POINT}movie/${movie.id}?append_to_response=videos&${API_KEY}`
        );
        if (res.data.videos.results.length > 0) {
          setPrimeMovieKey(res.data.videos.results[0].key);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    if (!isEmpty(primeMovie)) {
      setVideoKey(primeMovie);
    }
  }, [primeMovie]);

  const receivePrimeMovie = movie => {
    setPrimeMovie(movie);
  };

  const receiveSearchText = text => {
    async function searchMovie() {
      try {
        const res = await axios(
          `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
        );
        if (res.data.total_results > 0) {
          const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
          const tabPrimeMovie = res.data.results.slice(0, 1);
          setPrimeMovie(tabPrimeMovie[0]);
          setMoviesTypehead(tabMovieTypehead);
        } else {
          console.log("no search results sorry");
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
    searchMovie();
  };

  const receiveHandleChange = text => {
    async function searchMovie() {
      try {
        if (text.length > 1) {
          const res = await axios(
            `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
          );
          if (res.data.total_results > 0) {
            const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
            setMoviesTypehead(tabMovieTypehead);
          } else {
            console.log("no search results sorry");
          }
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
    searchMovie();
  };

  // Receive movies
  const receiveMovie = movie => {
    movie.qty = movie.qty + 1;
    AddMovieToBasket(movie, basket);
  };

  const AddMovieToBasket = (movie, basket) => {
    //Si mon panier est vide
    if (basket.length == 0) {
      //Panier vide j'ajouter mon movie
      movie.qty = 1;
      basket.push(movie);
      setBasket(basket);
    } else {
      //je parcours mon panier je vérifie si mon élément est déjà présent.
      basket.map(element => {
        // Si j'ai une corrrespondance
        if (movie.id == element.id) {
          // Élément déjà présent j'incrémente la quantité
          element.qty += 1;
        } else {
          // Mon élément n'est pas présent je l'ajoute simplement au panier
          movie.qty = 1;
          basket.push(movie);
          setBasket(basket);
        }
      });
    }
  };

  return (
    <section>
      <GlobalStyle />
      <Header />
      <div className="max-container">
        <SearchBar
          id="search"
          tabMovieTypehead={moviesTypehead}
          sendSearchText={receiveSearchText}
          sendHandleChange={receiveHandleChange}
        />
        <PrimeVideo>
          <Video moviekey={keyPrimeMovie} />
          <VideoDetail sendMovie={receiveMovie} movie={primeMovie} />
        </PrimeVideo>
        <VideoList sendPrimeMovie={receivePrimeMovie} movies={movies} />
      </div>
    </section>
  );
}
