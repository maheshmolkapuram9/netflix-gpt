import { useDispatch } from "react-redux";
import { fetchOptions } from "../utils/assets";
import { useEffect } from "react";

const useMoviesList = (moviesType, dispatchType) => {
  const dipatch = useDispatch();

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          moviesType +
          "?language=en-US&page=1",
        fetchOptions,
      );
      const json = await data.json();
      dipatch(dispatchType(json?.results));
    } catch (err) {
      console.error("Error in fetching movies", err);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMoviesList;
