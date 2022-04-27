import classes from "./ListTitle.module.css";

const ListTitle = (props) => {
  return (
    <h4 className={classes.title}>
      {props.title}
      {props.searchText}
    </h4>
  );
};

export default ListTitle;
