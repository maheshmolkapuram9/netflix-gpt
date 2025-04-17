import React from "react";
import { assetsList } from "../utils/assets";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log("Error during sign out", error);
      });
  };
  return (
    <div className="bg-gradient-to-b from-black flex justify-between items-center pr-10 ">
      <img
        className={`w-1/5 shadow-sm ${user ? "ml-10" : "ml-40"} `}
        src={assetsList.netflix_logo}
        alt="netflix logo"
      />
      {user && (
        <div className="group relative w-20 h-20 rounded-full bg-white flex justify-center items-center hover:border border-black cursor-pointer">
          <p className="text-3xl font-bold">{user.displayName[0]}</p>
          <div className="absolute -bottom-[7rem] right-0 py-14 hidden group-hover:block">
            <button
              onClick={handleSignOut}
              className="  text-white bg-red-600 px-10 py-2 text-nowrap rounded-md font-semibold hover:border border-black"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
