import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Error from "./components/Error/Error";
import MovieCardSelect from "./components/MovieSelect/MovieCardSelect";
import SearchDetalic from "./components/SearchInput/SearchDetalic";
import Favourite from "./components/Favourit/Favouret";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
