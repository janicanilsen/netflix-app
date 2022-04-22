import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../components/Movies/MovieDetails";
import MovieList from "../components/Movies/MovieList";
import {
  POPULAR_NOW,
  SEARCH_MATCHES,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "../components/store/movies";
import HomeBackgroundImage from "../components/UI/HomeBackgroundImage";

const Home = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else if (ui.status === "ERROR") {
    return <p>There was an error.</p>;
  }

  if (movieSearch.searchResults.length > 0) {
    return <MovieList category={SEARCH_MATCHES} searchText={movieSearch.searchText} />;
  }

  return (
    <Fragment>
      <HomeBackgroundImage />
      <MovieDetails />
      <MovieList category={POPULAR_NOW} />
      <MovieList category={TOP_RATED_MOVIES} />
      <MovieList category={TOP_RATED_TV_SHOWS} />
    </Fragment>
  );
};

export default Home;
