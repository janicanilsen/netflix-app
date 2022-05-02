import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movies";
import classes from "./MovieDetails.module.css";

const MovieDetails = (props) => {
  const movie = useSelector((state) => state.movies.displayMovieDetail);
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.movies.myMovieList);

  const movieIsOnList =
    movie && myList.some((listMovie) => movie.id === listMovie.id);

  let movieTrimmedDescription = "";

  if (movie) {
    movieTrimmedDescription =
      movie && movie.overview.substring(0, movie.overview.indexOf(".") + 1);
  }

  const addRemoveMovieHandler = () => {
    if (!movieIsOnList) {
      dispatch(movieActions.addToMovieList(movie));
    } else {
      dispatch(movieActions.removeFromMyList(movie.id));
    }
  };

  return (
    <section className={`${classes["detail-box"]} ${props.className}`}>
      <label>{movie && movie.title}</label>
      <div className={classes.buttons}>
        <button
          type="button"
          className="btn btn-secondary"
        >
          Play
        </button>
        <button
          className={`${"btn"} ${
            movieIsOnList ? "btn-light" : "btn-secondary"
          }`}
          onClick={addRemoveMovieHandler}
        >
          {movieIsOnList ? "Remove from my list" : "Add to list"}
        </button>
      </div>
      <p className={classes["movie-description"]}>{movieTrimmedDescription}</p>
    </section>
  );
};

export default MovieDetails;
