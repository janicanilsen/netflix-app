import { useSelector, useDispatch } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { MY_LIST, SEARCH_MATCHES } from "../components/store/constants";
import { useEffect } from "react";
import { movieActions } from "../components/store/movies";

const MyList = () => {
  const movieSearch = useSelector((state) => state.movies.movieSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //this fires after component unmount so perfect to reset the movie detail display
      dispatch(movieActions.resetMovieDetailDisplay());
    };
  }, [dispatch]);

  if (movieSearch.searchText.trim() !== "") {
    return (
      <MovieList
        category={SEARCH_MATCHES}
        searchText={movieSearch.searchText}
      />
    );
  }

  return <MovieList category={MY_LIST} />;
};

export default MyList;
