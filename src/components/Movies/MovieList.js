import Container from "../UI/Container";
import classes from "./MovieList.module.css";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import {
  MY_LIST,
  POPULAR_NOW,
  SEARCH_MATCHES,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "../store/movies";

const MovieList = (props) => {
  const movies = useSelector((state) => state.movies);
  const ui = useSelector((state) => state.ui);

  let movieList = [];
  let displayMovies = <p>List is empty.</p>;

  switch (props.category) {
    case POPULAR_NOW:
      movieList = [...movies.popularMovies];
      break;
    case MY_LIST:
      movieList = [...movies.myMovieList];
      break;
    case TOP_RATED_TV_SHOWS:
      movieList = [...movies.topRatedTVShows];
      break;
    case TOP_RATED_MOVIES:
      movieList = [...movies.topRatedMovies];
      break;
    case SEARCH_MATCHES:
      movieList = [...movies.movieSearch.searchResults];
      break;
    default:
      movieList = [];
  }

  if (ui.status === "SUCCESS" && movieList.length > 0) {
    displayMovies = movieList.map(
      (movie) =>
        movie.backdrop_path && (
          <Movie
            key={movie.id}
            movieData={{ ...movie, category: props.category }}
          />
        )
    );
  }

  if (ui.status === "ERROR") {
    displayMovies = <p>There was an error fetching data.</p>;
  }

  if (props.category === SEARCH_MATCHES && movieList.length === 0) {
    displayMovies = <p>No movie matching your search.</p>;
  }

  return (
    <section className={classes["movie-list"]}>
      <h4 className={classes['movie-category']}>
        {props.category} {props.searchText ? "'" + props.searchText + "'" : ""}
      </h4>
      <Container>{displayMovies}</Container>
    </section>
  );
};

export default MovieList;
