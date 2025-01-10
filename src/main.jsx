import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Error from "./components/Error/Error.jsx";
// // import MovieCard from "../src/components/MovieItemLIst";
// // import Filter from "./components/Filter/Filter.jsx";
// import MovieCardSelect from "./components/MovieSelect/MovieCardSelect.jsx";
// import SearchDetalic from "../src/components/SearchInput/SearchDetalic.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/HomePage",
//     element: <App />,
//   },
//   {
//     path: "/ErrorPage",
//     element: <Error />,
//   },
//   // {
//   //   path: "/movieWhatWasSelect",
//   //   element: <MovieCard />,
//   // },
//   {
//     path: "/FilterPage",
//     element: <Filter />,
//   },
//   {
//     path: "/movies",
//     element: <MovieCardSelect />,
//   },
//   {
//     path: "/SearchDetalic",
//     element: <SearchDetalic />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
