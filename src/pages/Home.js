import { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../components/Movies/MovieDetails";
import MovieList from "../components/Movies/MovieList";
import {
  POPULAR_MOVIES,
  POPULAR_TV_SHOWS,
  SEARCH_MATCHES,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "../components/store/movies";
import { SLIDER_VIEW } from "../components/store/ui";
import HomeBackgroundImage from "../components/UI/HomeBackgroundImage";

const Home = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (
    ui.fetchingPopularMovies ||
    ui.fetchingTopRatedMovies ||
    ui.fetchingPopularTVShows ||
    ui.fetchingTopRatedTVShows
  ) {
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
      <HomeBackgroundImage />
      <MovieDetails />
      <MovieList category={POPULAR_MOVIES} viewMode={SLIDER_VIEW} />
      <MovieList category={TOP_RATED_MOVIES} viewMode={SLIDER_VIEW} />
      <MovieList category={POPULAR_TV_SHOWS} viewMode={SLIDER_VIEW} />
      <MovieList category={TOP_RATED_TV_SHOWS} viewMode={SLIDER_VIEW} />
    </Fragment>
  );
};

export default Home;
