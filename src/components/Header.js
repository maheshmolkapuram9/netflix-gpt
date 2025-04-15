import React from "react";
import { assetsList } from "../utils/assets";

const Header = () => {
  return (
    <div>
      <img
        className="w-1/5 bg bg-slate-700/35 shadow-lg ml-40"
        src={assetsList.netflix_logo}
        alt="netflix logo"
      />
    </div>
  );
};

export default Header;
