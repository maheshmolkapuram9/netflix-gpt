import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pb-28">
      <div className="-mt-48 relative">
        <MovieList title={"Playing Now"} movies={movies.moviesPlayingNow} />
        <MovieList title={"Top Rated"} movies={movies.moviesTopRated} />
        <MovieList title={"UpComing"} movies={movies.moviesUpComing} />
        <MovieList title={"Popular"} movies={movies.moviesPopular} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
