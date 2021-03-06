import { createSlice } from "@reduxjs/toolkit";
import {
  ALL_CATEGORIES,
  MOVIES,
  MY_LIST,
  POPULAR_MOVIES,
  POPULAR_TV_SHOWS,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
  TV_SHOWS,
} from "./constants";

const initialMoviesState = {
  popularMovies: [],
  displayMovieDetail: null,
  myMovieList: [],
  topRatedTVShows: [],
  topRatedMovies: [],
  movieSearch: {
    searchResults: [],
    searchText: "",
  },
  popularTVShows: [],
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
    resetMovieDetailDisplay(state) {
      state.displayMovieDetail = state.popularMovies[0];
    },
    setDisplayMovieDetail(state, action) {
      switch (action.payload.category) {
        case POPULAR_MOVIES:
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
        case POPULAR_TV_SHOWS:
          state.displayMovieDetail = state.popularTVShows.find(
            (movie) => movie.id === action.payload.movieId
          );
          break;
        case MY_LIST:
          state.displayMovieDetail = state.myMovieList.find(
            (movie) => movie.id === action.payload.movieId
          );
          break;
        default:
          console.log(
            "Invalid category @ movies.js : " + action.payload.category
          );
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
    resetMovieSearch(state) {
      state.movieSearch = {
        searchText: "",
        searchResults: [],
      };
    },
    setPopularTVShows(state, action) {
      state.popularTVShows = action.payload;
    },
    setMovieSearch(state, action) {
      const searchText = action.payload.searchText;
      let results = [];

      const searchMovies = (list) => {
        return list.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
      };

      switch (action.payload.searchCategory) {
        case ALL_CATEGORIES:
          results = searchMovies(state.popularMovies);
          results = results.concat(searchMovies(state.topRatedTVShows));
          results = results.concat(searchMovies(state.topRatedMovies));
          results = results.concat(searchMovies(state.popularTVShows));
          break;
        case TV_SHOWS:
          results = searchMovies(state.topRatedTVShows);
          results = results.concat(searchMovies(state.popularTVShows));
          break;
        case MOVIES:
          results = searchMovies(state.popularMovies);
          results = results.concat(searchMovies(state.topRatedMovies));
          break;
        case MY_LIST:
          results = searchMovies(state.myMovieList);
          break;
        default:
          console.log(
            "Invalid category @ movie.js " + action.payload.searchCategory
          );
      }

      if (
        /* here, we're keeping the old results if there's no matches to satisfy use cases like:
              searchText: 'mannnn' => should still display 'Batman', 'Spider-Man', etc. */
        results.length === 0 &&
        (searchText.includes(state.movieSearch.searchText) ||
          state.movieSearch.searchText.includes(searchText))
      ) {
        state.movieSearch = {
          searchResults: [...state.movieSearch.searchResults],
          searchText,
        };
      } else {
        state.movieSearch = {
          searchText,
          searchResults: results,
        };
      }
    },
  },
});

export const movieActions = moviesSlice.actions;
export default moviesSlice.reducer;
