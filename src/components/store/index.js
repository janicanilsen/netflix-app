import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies";
import imageConfigReducer from "./image-config";
import uiReducer from './ui';

const store = configureStore({
  reducer: { imageConfig: imageConfigReducer, movies: movieReducer, ui: uiReducer },
});

export default store;
