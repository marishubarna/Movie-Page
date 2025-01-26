import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import App from "./App.jsx"; // Ensure the correct file extension is used
import Error from "./components/Error/Error.jsx";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect.jsx";
import SearchDetalic from "./components/SearchInput/SearchDetalic.jsx";
// import Rating from "./components/Ratting/Ratting.jsx";
import Favourite from "../src/components/Favourit/Favouret.jsx";
import store from "./store/store.jsx"; // Correct the import path if necessary
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
  {
    path: "/favourite",
    element: <Favourite />,
  },
  // {
  //   path: "/rating",
  //   element: <Rating />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap with Provider */}
      <RouterProvider router={router} /> {/* Corrected usage */}
    </Provider>
  </React.StrictMode>
);
