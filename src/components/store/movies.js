import { createSlice } from "@reduxjs/toolkit";

const initialMoviesState = {
  popularMovies: [],
  displayMovieDetail: null,
  myMovieList: [],
  topRatedTVShows: [],
  topRatedMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;

      //set initial value
      state.displayMovieDetail = action.payload[0];
    },
    setDisplayMovieDetail(state, action) {
      switch (action.payload.category) {
        case POPULAR_NOW:
          state.displayMovieDetail = state.popularMovies.find(
            (movie) => movie.id === action.payload.movieId
          );
          break;
        case TOP_RATED_TV_SHOWS:
          state.displayMovieDetail = state.topRatedTVShows.find(
            (movie) => movie.id === action.payload.movieId
          );
          break;
        case TOP_RATED_MOVIES:
          state.displayMovieDetail = state.topRatedMovies.find(
            (movie) => movie.id === action.payload.movieId
          );
          break;
        default:
          console.log("Invalid category @ movies.js : " + action.payload.category);
      }
    },
    addToMovieList(state, action) {
      state.myMovieList.push(action.payload);
    },
    removeFromMyList(state, action) {
      state.myMovieList = state.myMovieList.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setTopRatedTVShows(state, action) {
      state.topRatedTVShows = action.payload;
    },
    setTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
  },
});

//movie categories constants
export const POPULAR_NOW = "Popular Now";
export const TOP_RATED_TV_SHOWS = "Top Rated TV Shows";
export const MOVIES = "Movies";
export const MY_LIST = "My List";
export const TOP_RATED_MOVIES = "Top Rated Movies";

export const movieActions = moviesSlice.actions;
export default moviesSlice.reducer;
