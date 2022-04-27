import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { TOP_RATED_TV_SHOWS, SEARCH_MATCHES, POPULAR_TV_SHOWS, POPULAR_NOW, TOP_RATED } from "../components/store/movies";

const TVShows = () => {
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

  return (
    <>
      <MovieList category={POPULAR_TV_SHOWS} label={POPULAR_NOW} />
      <MovieList category={TOP_RATED_TV_SHOWS} label={TOP_RATED} />
    </>
  );
};

export default TVShows;
