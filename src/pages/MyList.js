import { useSelector } from "react-redux";
import MovieList from "../components/Movies/MovieList";
import { MY_LIST } from "../components/store/movies";

const MyList = () => {
  const ui = useSelector((state) => state.ui);

  if (ui.status === "PENDING") {
    return <p>Loading...</p>;
  } else {
    return <MovieList category={MY_LIST} />;
  }
};

export default MyList;
