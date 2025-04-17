/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/userSlice";
import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "browse",
      Component: Browse,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, or registerd
        const { uid, email, displayName } = user;
        console.log("user from auth", { uid, email, displayName });

        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
