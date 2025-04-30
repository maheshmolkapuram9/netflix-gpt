import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  addMoviesPlayingNow,
  addMoviesPopular,
  addMoviesTopRated,
  addMoviesUpComing,
} from "../store/moviesSlice";
import useMoviesList from "../hooks/useMoviesList";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useMoviesList("now_playing", addMoviesPlayingNow);
  useMoviesList("popular", addMoviesPopular);
  useMoviesList("top_rated", addMoviesTopRated);
  useMoviesList("upcoming", addMoviesUpComing);

  return (
    <div className="relative">
      <Header />
      {showGptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
