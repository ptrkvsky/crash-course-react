import React, { useEffect } from "react";

// Class
import ClassBasket from "../class/Basket";
import ClassMovies from "../class/Movies";

// Components
import VideoList from "./VideoList";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import Video from "../components/Video";
import Header from "./Header";
import BasketList from "./BasketList";

// helpers
import isEmpty from "../utils/isEmpty";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/GlobalStyle";
import { PrimeVideo } from "../styles/containers/StyleApp";

// Démarrage application
export default function App() {  
  const MyBasket = new ClassBasket();
  const myMovies = new ClassMovies();

  // First launch FetchMovies Display popular Movies + "prime movie"
  useEffect(() => {
    myMovies.fetchMovies();
  }, []);

  // Display video for prime movie 
  useEffect(() => {
    if (!isEmpty(myMovies.primeMovie)) {
      myMovies.setVideoKey(myMovies.primeMovie);
    }
  }, [myMovies.primeMovie]);


  return (
    <section>
      <GlobalStyle />
      <Header basket={MyBasket.getBasket()} />
      <div className="max-container">
        <SearchBar
          id="search"
          myMovies={myMovies}
        />
        <PrimeVideo>
          <Video movieKey={myMovies.keyPrimeMovie} />
          <VideoDetail myBasket={MyBasket} movie={myMovies.primeMovie} />
        </PrimeVideo>
        <VideoList
          myBasket={MyBasket}
          myMovies={myMovies}
        />
        <BasketList myBasket={MyBasket} />
      </div>
    </section>
  );
}
