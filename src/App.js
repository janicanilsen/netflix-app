import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { fetchImageConfigData, fetchMovies } from "./components/store/request-actions";
import { POPULAR_NOW, TOP_RATED_MOVIES, TOP_RATED_TV_SHOWS } from "./components/store/movies";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    /* we need this data to be able to display images */
    dispatch(fetchImageConfigData());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMovies(POPULAR_NOW));
    }, 500);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies(TOP_RATED_MOVIES));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies(TOP_RATED_TV_SHOWS));
  }, [dispatch]);

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route index element={<Home />} exact />
          <Route path='home' element={<Home />} />
          <Route path='tv-shows' element={<TVShows />} />
          <Route path='movies' element={<Movies />} />
          <Route path='my-list' element={<MyList />} />
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
