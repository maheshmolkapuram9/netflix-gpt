import { useDispatch } from "react-redux";
import { fetchOptions } from "../utils/assets";
import { addTrailer } from "../store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      fetchOptions,
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    if (trailers) {
      dispatch(addTrailer(trailers[0]));
    }
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
