import { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { POPULAR_NOW, TOP_RATED_MOVIES } from "../components/store/movies";

const Movies = () => {
  const ui = useSelector((state) => state.ui);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else {
    return (
      <Fragment>
        <MovieList category={POPULAR_NOW} />
        <MovieList category={TOP_RATED_MOVIES} />
      </Fragment>
    );
  }
};

export default Movies;
