import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error.jsx";
import MovieCard from "../src/components/MovieItemLIst";
import Filter from "./components/Filter/Filter.jsx";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect.jsx";
// import { MoviesItems } from "./components/API-File/MovieList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/HomePage",
    element: <App />,
  },
  {
    path: "/ErrorPage",
    element: <Error />,
  },
  {
    path: "/movieWhatWasSelect",
    element: <MovieCard />,
  },
  {
    path: "/FilterPage",
    element: <Filter />,
  },
  {
    path: "/movies",
    element: <MovieCardSelect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
