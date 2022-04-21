import Container from "../UI/Container";
import classes from "./MovieList.module.css";
import MoviePoster from "./MoviePoster";
import { useSelector } from "react-redux";
import {
  MY_LIST,
  POPULAR_NOW,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "../store/movies";

const MovieList = (props) => {
  const movies = useSelector((state) => state.movies);
  const ui = useSelector((state) => state.ui);

  let movieList;
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
    default:
      movieList = [];
  }

  if (ui.status === "SUCCESS" && movieList.length > 0) {
    displayMovies = movieList.map(
      (movie) =>
        movie.backdrop_path && (
          <MoviePoster
            key={movie.id}
            movieData={{ ...movie, category: props.category }}
          />
        )
    );
  }

  if (ui.status === "ERROR") {
    displayMovies = <p>There was an error fetching data.</p>;
  }

  return (
    <section>
      <h4>{props.category}</h4>
      <Container>{displayMovies}</Container>
    </section>
  );
};

export default MovieList;