import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { Fragment } from "react";
import {
  ERROR,
  POPULAR_NOW,
  POPULAR_TV_SHOWS,
  SEARCH_MATCHES,
  TOP_RATED,
  TOP_RATED_TV_SHOWS,
} from "../components/store/constants";

const TVShows = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (ui.fetchingPopularTVShows || ui.fetchingTopRatedTVShows) {
    return <p>Loading...</p>;
  }

  if (ui.status === ERROR) {
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
