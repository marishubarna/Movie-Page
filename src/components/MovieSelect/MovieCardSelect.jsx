import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { MoviesItems } from './../API-File/MovieList';

const MovieCardSelect = () => {
  const location = useLocation();
  const { MoviesItems } = location.state;
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      rating: rating,
    };
    setReviews([...reviews, newReview]);
    setReviewText("");
    setRating(0);
  };

  return (
    <div className="displayCenter">
      <div className="displayLine">
        <h1>{MoviesItems.name}</h1>
        <h5>{MoviesItems.engName}</h5>
        <img
          className="ImagesDisplaySelect"
          src={MoviesItems.images}
          height={"100%"}
          width={"100%"}
          alt={MoviesItems.engName}
        />
        <h5>Year: {MoviesItems.year}</h5>
        <h5>Genre: {MoviesItems.genre}</h5>
        <h5>Director: {MoviesItems.Director}</h5>
        <h5>Rating: {MoviesItems.rating}</h5>
        <video src={MoviesItems.trailer} controls></video>
        <p>{MoviesItems.aboutFilm}</p>
      </div>

      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
          placeholder="Write a review"
        ></textarea>
        <br />
        <label>
          Rating
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="10"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MovieCardSelect;
