import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { languageConfig } from "../utils/languageConstants";

const GptMovies = () => {
  const moviesByGpt = useSelector((store) => store.gpt.moviesByGpt);
  const moviesByTmdb = useSelector((store) => store.gpt.moviesByTmdb);
  const languageCode = useSelector((store) => store.gpt.languageCode);
  return (
    <div className="w-full my-10 min-h-lvh rounded-md px-4 bg-black/75 py-6">
      {!moviesByGpt && (
        <div className="w-[70%] mx-auto text-2xl">
          <p className="pb-4">{languageConfig[languageCode].gptEx.title}</p>
          <p>{languageConfig[languageCode].gptEx.ex}</p>
          <p>{languageConfig[languageCode].gptEx.ex1}</p>
          <p>{languageConfig[languageCode].gptEx.ex2}</p>
        </div>
      )}
      {moviesByGpt &&
        moviesByGpt.map((movie, index) => {
          return (
            <MovieList key={movie} title={movie} movies={moviesByTmdb[index]} />
          );
        })}
    </div>
  );
};

export default GptMovies;
