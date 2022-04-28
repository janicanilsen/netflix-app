import { SLIDER_VIEW } from "../store/constants";
import classes from "./MovieListContainer.module.css";

const MovieListContainer = (props) => {
  const containerClass =
    props.viewMode === SLIDER_VIEW
      ? classes["slider-container"]
      : classes["grid-container"];
  return <div className={containerClass}> {props.children} </div>;
};

export default MovieListContainer;
