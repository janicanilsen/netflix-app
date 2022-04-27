import { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import {
  POPULAR_NOW,
  TOP_RATED_MOVIES,
  SEARCH_MATCHES,
  POPULAR_MOVIES,
  TOP_RATED,
} from "../components/store/movies";

const Movies = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else if (ui.status === "ERROR") {
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
      <MovieList category={POPULAR_MOVIES} title={POPULAR_NOW} />
      <MovieList category={TOP_RATED_MOVIES} title={TOP_RATED} />
    </Fragment>
  );
};

export default Movies;
