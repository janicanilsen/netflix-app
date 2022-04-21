import { useSelector } from "react-redux";
import MovieDetails from "../components/Movies/MovieDetails";
import MovieList from "../components/Movies/MovieList";
import { POPULAR_NOW, TOP_RATED_MOVIES, TOP_RATED_TV_SHOWS } from "../components/store/movies";
import HomeBackgroundImage from "../components/UI/HomeBackgroundImage";

const Home = () => {
  const ui = useSelector((state) => state.ui);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else if (ui.status === "ERROR") {
    return <p>There was an error.</p>;
  } else if (ui.status === "SUCCESS") {
    return (
      <>
        <HomeBackgroundImage />
        <MovieDetails />
        <MovieList category={POPULAR_NOW} />
        <MovieList category={TOP_RATED_MOVIES} />
        <MovieList category={TOP_RATED_TV_SHOWS} />
      </>
    );
  }
};

export default Home;
