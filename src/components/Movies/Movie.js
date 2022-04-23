import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movies";
import classes from "./Movie.module.css";

const Movie = (props) => {
  const imageConfig = useSelector((state) => state.imageConfig);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(
      movieActions.setDisplayMovieDetail({
        movieId: props.movieData.id,
        category: props.movieData.category,
      })
    );
  };

  return (
    <Fragment>
      {/* <div className={classes["movie-poster"]}> */}
        <img
          src={
            imageConfig.baseUrl +
            imageConfig.size +
            props.movieData.backdrop_path
          }
          alt={props.movieData.original_title}
          className={classes["movie-poster"]}
          onClick={clickHandler}
        />
      {/* </div> */}
    </Fragment>
  );
};

export default Movie;
