import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} style={props.styleProp}>
      <div className={classes["modal-content"]}>{props.children}</div>
    </div>
  );
};
