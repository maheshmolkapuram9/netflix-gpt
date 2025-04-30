import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoContainer = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((state) => state.movies?.trailer);

  return (
    <div className="text-red-600 relative">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?si=nxed3ufQrUsM_-uT&autoplay=1&mute=1&playlist=" +
          movieTrailer?.key +
          "&loop=1&controls=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
