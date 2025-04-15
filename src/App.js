import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
