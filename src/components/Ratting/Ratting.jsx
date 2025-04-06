import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "primereact/rating";
import { Button, Stack } from "@chakra-ui/react";
import {
  setRatingValue,
  addReview,
  loadFromLocalStorage,
} from "../../store/Slice";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./Rating.css";

const WithoutCancelDemo = ({ movieId }) => {
  const dispatch = useDispatch();
  const { value, reviews } = useSelector((state) => state.rating);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    review: "",
  });

  const handleRatingInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRating = () => {
    if (inputs.firstName && inputs.lastName && inputs.review) {
      const newReview = {
        ...inputs,
        movieId,
        rating: value,
        date: new Date().toISOString(),
      };
      dispatch(addReview(newReview));
      setInputs({ firstName: "", lastName: "", review: "" });
    }
  };

  return (
    <div className="rating-container">
      <div className="rating-stars">
        <Rating
          value={value}
          onChange={(e) => dispatch(setRatingValue(e.value))}
          cancel={false}
          stars={5}
        />
      </div>
      <div className="review-form">
        <Stack spacing={4}>
          <input
            className="rating-input"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleRatingInput}
          />
          <input
            className="rating-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleRatingInput}
          />
          <textarea
            className="rating-textarea"
            name="review"
            placeholder="Your review..."
            value={inputs.review}
            onChange={handleRatingInput}
          />
          <Button colorScheme="blue" onClick={handleAddRating}>
            Submit Review
          </Button>
        </Stack>
      </div>
      <div className="reviews-list">
        {reviews
          .filter((review) => review.movieId === movieId)
          .map((review, index) => (
            <div key={index} className="review-item">
              <p className="review-author">
                {review.firstName} {review.lastName}
              </p>
              <Rating value={review.rating} readOnly cancel={false} stars={5} />
              <p className="review-text">{review.review}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WithoutCancelDemo;
