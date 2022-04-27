import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./MoviePoster.module.css";

const MoviePoster = (props) => {
  const imageConfig = useSelector((state) => state.imageConfig);
  return (
    <Fragment>
      <img
        src={
          imageConfig.baseUrl + imageConfig.size + props.movieData.poster_path
        }
        alt={props.movieData.original_title}
        className={classes["movie-image"]}
      />
    </Fragment>
  );
};

export default MoviePoster;
