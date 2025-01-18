import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./Slice"; // Corrected import path

const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});

export default store;
