import MovieListContainer from "../UI/MovieListContainer";
import classes from "./MovieList.module.css";
import MovieBackdrop from "./MovieBackdrop";
import MoviePoster from "./MoviePoster";
import { useSelector } from "react-redux";
import ListTitle from "./ListTitle";
import { MY_LIST, POPULAR_MOVIES, POPULAR_TV_SHOWS, SEARCH_MATCHES, SLIDER_VIEW, TOP_RATED_MOVIES, TOP_RATED_TV_SHOWS } from "../store/constants";

const MovieList = (props) => {
  const movies = useSelector((state) => state.movies);
  const ui = useSelector((state) => state.ui);

  let movieList = [];
  let movieImages = <p>List is empty.</p>;

  switch (props.category) {
    case POPULAR_MOVIES:
      movieList = [...movies.popularMovies];
      break;
    case MY_LIST:
      movieList = [...movies.myMovieList];
      break;
    case TOP_RATED_TV_SHOWS:
      movieList = [...movies.topRatedTVShows];
      break;
    case TOP_RATED_MOVIES:
      movieList = [...movies.topRatedMovies];
      break;
    case POPULAR_TV_SHOWS:
      movieList = [...movies.popularTVShows];
      break;
    case SEARCH_MATCHES:
      movieList = [...movies.movieSearch.searchResults];
      break;
    default:
      console.log('Invalid category @ MovieList.js ' + props.category);
  }

  if (ui.status === "SUCCESS" && movieList.length > 0) {
    if (props.viewMode === SLIDER_VIEW) {
      movieImages = movieList.map(
        (movie) =>
          movie.backdrop_path && (
            <MovieBackdrop
              key={movie.id}
              movieData={{ ...movie, category: props.category }}
            />
          )
      );
    } else { //grid view
      movieImages = movieList.map(
        (movie) =>
          movie.poster_path && (
            <MoviePoster
              key={movie.id}
              movieData={{ ...movie, category: props.category }}
            />
          )
      );
    }
  }

  if (props.category === SEARCH_MATCHES && movieList.length === 0) {
    movieImages = <p>No movie matching your search.</p>;
  }

  return (
    <section className={classes["movie-list"]}>
      <ListTitle
        title={props.title ? props.title : props.category}
        searchText={props.searchText ? "'" + props.searchText + "'" : ""}
      />
      <MovieListContainer viewMode={props.viewMode}>
        {movieImages}
      </MovieListContainer>
    </section>
  );
};

export default MovieList;
