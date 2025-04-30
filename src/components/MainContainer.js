import React from "react";
import VideoContainer from "./VideoContainer";
import VideoTitleContainer from "./VideoTitleContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.moviesPlayingNow);

  if (!movies) return;
  // selecting a random movie from movies list
  const { id, original_title, overview } =
    movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="text-white">
      <VideoContainer movieId={id} />
      <VideoTitleContainer title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
