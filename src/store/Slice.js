import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    value: 0,
    reviews: [],
  },
  reducers: {
    setRatingValue: (state, action) => {
      state.value = action.payload;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    loadFromLocalStorage: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRatingValue, addReview, loadFromLocalStorage } =
  ratingSlice.actions;
export default ratingSlice.reducer;
