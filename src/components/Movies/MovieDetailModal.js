import { Fragment } from "react";
import classes from "./MovieDetailModal.module.css";
import MovieDetails from "./MovieDetails";
import * as ReactDOM from "react-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop } from "../UI/Modal";
import { ModalOverlay } from "../UI/Modal";

const MovieDetailModal = (props) => {
  const imagePath = props.movieDetails.backdropPath;
  const portalElement = document.getElementById("overlays");

  const style = {
    backgroundImage: `url(${imagePath})`,
    backgroundSize: "100% 100%",
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.hideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay styleProp={style}>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes.close}
            onClick={props.hideModal}
          />
          <MovieDetails className={classes["modal-detail"]} />
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default MovieDetailModal;
