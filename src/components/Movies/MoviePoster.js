import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movies";
import MovieDetailModal from "./MovieDetailModal";
import classes from "./MoviePoster.module.css";

const MoviePoster = (props) => {
  const dispatch = useDispatch();
  const imageConfig = useSelector((state) => state.imageConfig);
  const [showModal, setShowModal] = useState(false);
  const movie = props.movieData;
  const movieDetails = {
    title: movie.original_title,
    backdropPath: imageConfig.baseUrl + imageConfig.size + movie.backdrop_path,
    description: movie.overview.substring(0, movie.overview.indexOf(".") + 1),
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showModalHandler = () => {
    setShowModal(true);
    dispatch(
      movieActions.setDisplayMovieDetail({
        category: movie.category,
        movieId: movie.id,
      })
    );
  };
  return (
    <Fragment>
      {showModal && (
        <MovieDetailModal
          displayModal={showModal}
          hideModal={hideModalHandler}
          movieDetails={movieDetails}
        />
      )}
      <img
        src={imageConfig.baseUrl + imageConfig.size + movie.poster_path}
        alt={movie.original_title}
        className={classes["movie-image"]}
        onClick={showModalHandler}
      />
    </Fragment>
  );
};

export default MoviePoster;
