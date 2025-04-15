import React, { useState } from "react";
import Header from "./Header";
import { assetsList } from "../utils/assets";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const handleToggleSignin = () => {
    setSignIn(!signIn);
  };

  return (
    <div style={{ backgroundImage: `url(${assetsList.netflix_header_bg})` }}>
      <Header />
      <form className="font-bold text-white px-12 py-14 bg-black/85 w-[450px] mx-auto">
        <h1 className=" text-3xl font-bold pb-6">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="UserName"
            className="p-4 bg-gray-400/30 block mb-4 w-full border rounded-md border-white"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-4 bg-gray-400/30 block mb-4 w-full border rounded-md border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-400/30 block mb-4 w-full border rounded-md border-white"
        />
        <button className="bg-red-600 w-full p-3 rounded-md">
          {signIn ? "Sign in" : "Sign up"}
        </button>
        {signIn && (
          <>
            <p className="text-center font-thin my-3">OR</p>
            <button className="bg-red-600 w-full p-3 rounded-md">
              Use a sign-in code
            </button>
            <p className="text-center underline my-3 font-normal cursor-pointer">
              Forgot password?
            </p>
            <div className="flex">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value="rememberMe"
                className="w-4 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="pl-3 font-semibold">
                Remember me
              </label>
            </div>
          </>
        )}

        <p className="text-gray-400 font-normal my-3">
          {signIn ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={handleToggleSignin}
            className="text-white font-bold cursor-pointer hover:underline"
          >
            {signIn ? "Sign up now." : "Log in now."}
          </span>
        </p>
      </form>
      <p className="py-10"></p>
    </div>
  );
};

export default Login;
