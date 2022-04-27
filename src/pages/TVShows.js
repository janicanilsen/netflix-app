import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import {
  TOP_RATED_TV_SHOWS,
  SEARCH_MATCHES,
  POPULAR_TV_SHOWS,
  POPULAR_NOW,
  TOP_RATED,
} from "../components/store/movies";
import { Fragment } from "react";

const TVShows = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (ui.fetchingPopularTVShows || ui.fetchingTopRatedTVShows) {
    return <p>Loading...</p>;
  }
  
  if (ui.status === "ERROR") {
    return <p>There was an error fetching data.</p>;
  }

  if (movieSearch.searchText.trim() !== "") {
    return (
      <MovieList
        category={SEARCH_MATCHES}
        searchText={movieSearch.searchText}
      />
    );
  }

  return (
    <Fragment>
      <MovieList category={POPULAR_TV_SHOWS} title={POPULAR_NOW} />
      <MovieList category={TOP_RATED_TV_SHOWS} title={TOP_RATED} />
    </Fragment>
  );
};

export default TVShows;
