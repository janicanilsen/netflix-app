import { imageConfigActions } from "./image-config";
import {
  movieActions,
  POPULAR_NOW,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "./movies";
import { uiActions } from "./ui";

/***** START OF CONSTANTS *****/

const API_KEY = "498b63b9d2300c67ac8949ed13dcbcfe";
const API_CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";

const PAGE_ONE_REQUEST = "&language=en-US&page=1";

const GET_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  API_KEY +
  PAGE_ONE_REQUEST;
const GET_TOP_RATED_TV_SHOWS_URL =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=" +
  API_KEY +
  PAGE_ONE_REQUEST;
const GET_TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  API_KEY +
  PAGE_ONE_REQUEST;

//status
const PENDING = "PENDING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

/***** END OF CONSTANTS *****/

export const fetchImageConfigData = () => {
  return async (dispatch) => {
    dispatch(uiActions.setStatus(PENDING));
    let data;

    const getImageConfigRequest = async () => {
      const response = await fetch(API_CONFIG_URL + API_KEY);

      if (!response.ok) {
        console.log("Error fetching image config data.");
      }
      data = await response.json();
    };

    getImageConfigRequest()
      .then(() => {
        dispatch(imageConfigActions.setConfigData(data.images.base_url));
        dispatch(uiActions.setStatus(SUCCESS));
      })
      .catch(() => {
        dispatch(uiActions.setStatus(ERROR));
      });
  };
};

export const fetchMovies = (category) => {
  return async (dispatch) => {
    dispatch(uiActions.setStatus(PENDING));
    let movieResults = null;

    const getRequest = async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Error fetching " + category);
      }

      const data = await response.json();
      movieResults = data.results;
    };

    switch (category) {
      case POPULAR_NOW:
        getRequest(GET_POPULAR_MOVIES_URL)
          .then(() => {
            dispatch(movieActions.setPopularMovies(movieResults));
            dispatch(uiActions.setStatus(SUCCESS));
          })
          .catch(() => {
            dispatch(uiActions.setStatus(ERROR));
          });
        break;
      case TOP_RATED_TV_SHOWS:
        getRequest(GET_TOP_RATED_TV_SHOWS_URL)
          .then(() => {
            /* we need to set the title as below because this GET request
              does not return a title property */
            dispatch(
              movieActions.setTopRatedTVShows(
                movieResults.map((movie) => {
                  return { ...movie, title: movie.name };
                })
              )
            );
            dispatch(uiActions.setStatus(SUCCESS));
          })
          .catch(() => {
            dispatch(uiActions.setStatus(ERROR));
          });
        break;
      case TOP_RATED_MOVIES:
        getRequest(GET_TOP_RATED_MOVIES_URL)
          .then(() => {
            dispatch(movieActions.setTopRatedMovies(movieResults));
            dispatch(uiActions.setStatus(SUCCESS));
          })
          .catch(() => {
            dispatch(uiActions.setStatus(ERROR));
          });
        break;
      default:
        console.log("Invalid category : " + category);
        dispatch(uiActions.setStatus(ERROR));
    }
  };
};
