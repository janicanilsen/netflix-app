import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/movies";
import classes from "./MovieBackdrop.module.css";

const MovieBackdrop = (props) => {
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
      <img
        src={
          imageConfig.baseUrl + imageConfig.size + props.movieData.backdrop_path
        }
        alt={props.movieData.original_title}
        className={classes["movie-image"]}
        onClick={clickHandler}
      />
    </Fragment>
  );
};

export default MovieBackdrop;
