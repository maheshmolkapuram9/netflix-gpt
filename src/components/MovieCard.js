import React from "react";
import { baseImgUrl } from "../utils/assets";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) {
    return null;
  }
  return (
    <div className="w-64 shrink-0">
      <div className="w-[256px] h-[384px] border border-gray/20">
        <img
          className="w-full h-full object-cover"
          src={baseImgUrl + poster_path}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
