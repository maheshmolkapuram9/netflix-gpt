import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div>
        <h2 className="px-16 text-4xl font-semibold text-white py-6">
          {title}
        </h2>
        <div
          className="flex overflow-x-scroll gap-4 px-16 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    )
  );
};

export default MovieList;
