// features/rating/ratingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  reviews: [],
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRatingValue: (state, action) => {
      state.value = action.payload;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    loadFromLocalStorage: (state, action) => {
      const { value, reviews } = action.payload;
      state.value = value || 0;
      state.reviews = reviews || [];
    },
  },
});

export const { setRatingValue, addReview, loadFromLocalStorage } =
  ratingSlice.actions;
export default ratingSlice.reducer;
