import { useSelector } from "react-redux";
import classes from "./HomeBackgroundImage.module.css";

const HomeBackgroundImage = (props) => {
  const movie = useSelector((state) => state.movies.displayMovieDetail);
  const imageConfig = useSelector((state) => state.imageConfig);
  let imagePath = movie
    ? "url(" +
      imageConfig.baseUrl +
      imageConfig.size +
      movie.backdrop_path +
      ")"
    : "";

  return (
    <section
      className={classes["main-box"]}
      style={{
        // backgroundImage: `url(http://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg)`,
        backgroundImage: imagePath,
        backgroundSize: "100% 100%",
        opacity: "0.4",
      }}
    ></section>
  );
};

export default HomeBackgroundImage;
