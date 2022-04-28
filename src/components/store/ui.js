import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  status: "",
  fetchingPopularMovies: true,
  fetchingTopRatedMovies: true,
  fetchingPopularTVShows: true,
  fetchingTopRatedTVShows: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setFetchingPopularMovies(state, action) {
        state.fetchingPopularMovies = action.payload;
    },
    setFetchingTopRatedMovies(state, action) {
        state.fetchingTopRatedMovies = action.payload;
    },
    setFetchingPopularTVShows(state, action) {
        state.fetchingPopularTVShows = action.payload;
    },
    setFetchingTopRatedTVShows(state, action) {
        state.fetchingTopRatedTVShows = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
