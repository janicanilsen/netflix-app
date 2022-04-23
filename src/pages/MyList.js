import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { MY_LIST, SEARCH_MATCHES } from "../components/store/movies";

const MyList = () => {
  const ui = useSelector((state) => state.ui);
  const movieSearch = useSelector((state) => state.movies.movieSearch);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  }

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
