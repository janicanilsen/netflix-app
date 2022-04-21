import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import classes from "./Categories.module.css";

const Categories = () => {
  const movieList = useSelector((state) => state.movies.myMovieList);
  const location = useLocation();

  const homeClasses = `${classes.home} ${
    location.pathname.includes("home") || location.key === "default"
      ? classes.active
      : ""
  }`;
  const tvShowClass = location.pathname.includes("tv")
    ? `${classes.active}`
    : "";
  const moviesClass = location.pathname.includes("movies")
    ? `${classes.active}`
    : "";
  const myListClass = location.pathname.includes("list")
    ? `${classes.active}`
    : "";

  const showListHandler = () => {};

  return (
    <nav>
      <ul>
        <li>
          <Link to="home" className={homeClasses}>
            Home
          </Link>
        </li>
        <li>
          <Link to="tv-shows" className={tvShowClass}>
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="movies" className={moviesClass}>
            Movies
          </Link>
        </li>
        <li>
          <Link to="my-list" className={myListClass}>
            My List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
