import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error.jsx";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect.jsx";
import SearchDetalic from "./components/SearchInput/SearchDetalic.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@radix-ui/themes/styles.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/movie/:id",
    element: <MovieCardSelect />,
  },
  {
    path: "/searchPage",
    element: <SearchDetalic />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
