import classes from "./SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ALL_CATEGORIES, movieActions, MOVIES, MY_LIST, TOP_RATED_TV_SHOWS } from "../store/movies";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.movies.movieSearch.searchText);
  const location = useLocation();

  useEffect(() => {
    /* clearing search when user navigates to a different page */
    dispatch(movieActions.resetMovieSearch());
  }, [dispatch, location]);

  const searchOnChangeHandler = (event) => {
    const searchValue = event.target.value;
    if (searchValue.trim() === "") {
      dispatch(movieActions.resetMovieSearch());
    } else {
      if(location.pathname.includes('home') || location.key === "default") {
        dispatch(movieActions.setMovieSearch({ searchText: searchValue, searchCategory: ALL_CATEGORIES }));
      } else if(location.pathname.includes('tv')) {
        dispatch(movieActions.setMovieSearch({ searchText: searchValue, searchCategory: TOP_RATED_TV_SHOWS }));
      } else if(location.pathname.includes('movies')) {
        dispatch(movieActions.setMovieSearch({ searchText: searchValue, searchCategory: MOVIES }));
      } else if(location.pathname.includes('list')) {
        dispatch(movieActions.setMovieSearch({ searchText: searchValue, searchCategory: MY_LIST }));
      }
    }
  };

  const clearSearchHandler = () => {
    dispatch(movieActions.resetMovieSearch());
  };

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["search-group"]}>
        <FontAwesomeIcon icon={faSearch} className={classes["search-icon"]} />
        <label className='visually-hidden' htmlFor='inputSearch'>Search</label>
        <input
          id='inputSearch'
          type="text"
          placeholder="Search"
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
