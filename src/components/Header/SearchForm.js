import classes from "./SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { movieActions } from "../store/movies";

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(
    (state) => state.movies.movieSearch.searchText
  );

  const searchOnChangeHandler = (event) => {
    if (event.target.value.trim() === "") {
      dispatch(movieActions.resetMovieSearch());
    } else {
      dispatch(movieActions.setMovieSearch(event.target.value));
    }
  };

  const clearSearchHandler = () => {
    dispatch(movieActions.resetMovieSearch());
  };
  return (
    <form>
      <div className={classes["search-group"]}>
        <FontAwesomeIcon icon={faSearch} className={classes["search-icon"]} />
        <input
          type="text"
          placeholder="Search a movie"
          className={`form-control ${classes["search-box"]}`}
          onChange={searchOnChangeHandler}
          value={searchText}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className={classes["clear-search-icon"]}
          onClick={clearSearchHandler}
        />
      </div>
    </form>
  );
};

export default SearchForm;
