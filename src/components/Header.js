import React, { useEffect, useState } from "react";
import { languageConfig } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { addMoviesByGpt, toggleShowGptSearch } from "../store/gptSlice";
import { assetsList } from "../utils/assets";
import SelectElement from "../utils/SelectElement";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const languageCode = useSelector((store) => store.gpt.languageCode);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error during sign out", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGptToggle = () => {
    dispatch(toggleShowGptSearch());
    !showGptSearch &&
      dispatch(addMoviesByGpt({ moviesByGpt: null, moviesByTmdb: null }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, or registerd
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gradient-to-b from-black flex justify-between items-center pr-10 absolute top-0 z-10 ">
      <img
        className={`w-1/5 shadow-sm ${user ? "ml-10" : "ml-40"} `}
        src={assetsList.netflix_logo}
        alt="netflix logo"
      />
      {user && (
        <div className="flex gap-6">
          <button
            onClick={handleGptToggle}
            className="bg-white px-6 rounded-md py-2 text-2xl font-bold hover:bg-slate-400"
          >
            {showGptSearch
              ? languageConfig[languageCode].backToHome + " 🔙"
              : "GPT Search"}
          </button>
          {showGptSearch && <SelectElement />}
          <div className="group relative w-14 h-14 rounded-full bg-white flex justify-center items-center hover:border border-black cursor-pointer">
            <p className="text-3xl font-bold">
              {user.displayName && user.displayName[0]}
            </p>
            <div className="absolute -bottom-[7rem] right-0 py-14 hidden group-hover:block">
              <button
                onClick={handleSignOut}
                className="  text-white bg-red-600 px-10 py-2 text-nowrap rounded-md font-semibold hover:border border-black"
              >
                {loading ? "Loading..." : "Sign out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
