import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import {
  fetchImageConfigData,
  fetchMovies,
} from "./components/store/request-actions";
import PageNotFound from "./pages/PageNotFound";
import {
  POPULAR_MOVIES,
  POPULAR_TV_SHOWS,
  TOP_RATED_MOVIES,
  TOP_RATED_TV_SHOWS,
} from "./components/store/constants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    /* we need this data to be able to display images */
    dispatch(fetchImageConfigData());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchMovies(POPULAR_MOVIES));
      dispatch(fetchMovies(TOP_RATED_MOVIES));
      dispatch(fetchMovies(TOP_RATED_TV_SHOWS));
      dispatch(fetchMovies(POPULAR_TV_SHOWS));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="home" element={<Home />} />
          <Route path="tv-shows" element={<TVShows />} />
          <Route path="movies" element={<Movies />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
