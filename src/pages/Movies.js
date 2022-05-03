import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import {
  ERROR,
  POPULAR_MOVIES,
  POPULAR_NOW,
  SEARCH_MATCHES,
  TOP_RATED,
  TOP_RATED_MOVIES,
} from "../components/store/constants";
import { movieActions } from "../components/store/movies";

const Movies = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //this fires after component unmount so perfect to reset the movie detail display
      dispatch(movieActions.resetMovieDetailDisplay());
    };
  }, [dispatch]);

  if (ui.fetchingPopularMovies || ui.fetchingTopRatedMovies) {
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
      <MovieList category={POPULAR_MOVIES} title={POPULAR_NOW} />
      <MovieList category={TOP_RATED_MOVIES} title={TOP_RATED} />
    </Fragment>
  );
};

export default Movies;
