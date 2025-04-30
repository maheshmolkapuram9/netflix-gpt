import React from "react";

const VideoTitleContainer = ({ title, overview }) => {
  return (
    <div className="w-full bg-gradient-to-r from-black/80 absolute top-0 left-0 right-0 aspect-video px-20 flex flex-col justify-center pt-28">
      <h1 className="text-4xl font-bold pb-10">{title}</h1>
      <p className="w-2/5 text-2xl pb-10">{overview}</p>
      <div className="pb-6 flex gap-4">
        <button className="text-black/85 font-bold text-3xl bg-white px-10 py-4 rounded-md hover:bg-slate-200">
          ▶️ Play
        </button>
        <button className="text-white/85 font-bold text-3xl bg-gray-500/70 px-10 py-4 rounded-md hover:bg-gray-500/90">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleContainer;
