import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const location = useLocation();

  const homeClass =
    location.pathname.includes("home") ||
    (location.pathname.length === 1 && location.key === "default")
      ? `${classes.active}`
      : "";
  const tvShowClass = location.pathname.includes("tv")
    ? `${classes.active}`
    : "";
  const moviesClass = location.pathname.includes("movies")
    ? `${classes.active}`
    : "";
  const myListClass = location.pathname.includes("list")
    ? `${classes.active}`
    : "";

  return (
    <nav className={classes["nav-container"]}>
      <ul>
        <li>
          <Link to="home" className={homeClass}>
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

export default MainNavigation;
