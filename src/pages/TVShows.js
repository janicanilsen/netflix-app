import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { TOP_RATED_TV_SHOWS } from "../components/store/movies";
import "./TVShows.module.css";

const TVShows = () => {
  const ui = useSelector((state) => state.ui);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else {
    return <MovieList category={TOP_RATED_TV_SHOWS} />;
  }
};

export default TVShows;
