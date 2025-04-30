import React, { useRef, useState } from "react";
import Header from "./Header";
import { assetsList } from "../utils/assets";
import { loginValidation } from "../utils/loginValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import InputElement from "../utils/InputElement";
import RedButton from "../utils/RedButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState(true);
  const [validationError, setValidationError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleToggleSignin = () => {
    setValidationError(null);
    setSignIn(!signIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const validation = loginValidation(
      userNameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value,
      signIn,
    );

    setValidationError(validation);

    if (validation) {
      setLoading(false);
      return;
    }

    if (!signIn) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value,
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: userNameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              console.log("An Error occured in Updating Profile", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError({ error: errorCode + "-" + errorMessage });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value,
      )
        .then((userCredential) => {
          // signed In
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError({ error: errorCode + "-" + errorMessage });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen w-full"
      style={{ backgroundImage: `url(${assetsList.netflix_header_bg})` }}
    >
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <form className="font-bold text-white px-12 py-14 bg-black/85 w-[450px] mx-auto">
          <h1 className=" text-3xl font-bold pb-6">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <InputElement
              ref={userNameRef}
              type="text"
              placeholder="UserName"
            />
          )}
          <InputElement
            ref={emailRef}
            type="email"
            placeholder="Email"
            autoComplete="username"
            className=" mb-4"
          />
          <InputElement
            ref={passwordRef}
            type="password"
            placeholder="Password"
            autoComplete={signIn ? "current-password" : "new-password"}
            className=" mb-4"
          />

          {validationError && (
            <div>
              <p className="text-red-600 border border-red-400 rounded-md px-4 mb-3 animate-pulse">
                {validationError?.error}
              </p>
              <ul className="mb-3">
                {validationError?.conditions &&
                  validationError?.conditions.map((condition, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {condition}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
          <RedButton
            onClick={handleSubmit}
            buttonText={
              !loading ? (signIn ? "Sign in" : "Sign up") : "Loading..."
            }
          />
          {signIn && (
            <>
              <p className="text-center font-thin my-3">OR</p>
              <RedButton buttonText="Use a sign-in code" />
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
      </div>
    </div>
  );
};

export default Login;
