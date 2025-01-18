import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Rating.css";
// import Frame from "../Ratting/Frame";
import { Rating } from "primereact/rating";
import {
  setRatingValue,
  addReview,
  loadFromLocalStorage,
} from "../../store/Slice"; // Corrected import path

export default function WithoutCancelDemo() {
  const dispatch = useDispatch();
  const { value, reviews } = useSelector((state) => state.rating);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    review: "",
  });

  const handleRatingInput = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleAddRating = () => {
    if (
      inputs.firstName.trim() !== "" &&
      inputs.lastName.trim() !== "" &&
      inputs.review.trim() !== ""
    ) {
      const newReview = { ...inputs, completed: false };
      dispatch(addReview(newReview));
      localStorage.setItem("Rating", JSON.stringify([...reviews, newReview]));
      setInputs({ firstName: "", lastName: "", review: "" });
    }
  };

  useEffect(() => {
    const storedData = {
      value: JSON.parse(localStorage.getItem("RatingValue")),
      reviews: JSON.parse(localStorage.getItem("Rating")),
    };
    dispatch(loadFromLocalStorage(storedData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("RatingValue", JSON.stringify(value));
  }, [value]);

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    dispatch(loadFromLocalStorage({ value, reviews: updatedReviews }));
    localStorage.setItem("Rating", JSON.stringify(updatedReviews));
  };

  return (
    <div className="">
      <Rating
        value={value}
        onChange={(e) => {
          dispatch(setRatingValue(e.value));
        }}
        cancel={false}
      />

      <div className="card flex justify-content-center">
        <div className="displayrating">
          {/* <Frame /> */}
          <input
            className="RatingInputFirstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleRatingInput}
            value={inputs.firstName}
          />
          <input
            className="RatingInputLastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleRatingInput}
            value={inputs.lastName}
          />
          <textarea
            className="RatingInputRevies"
            type="text"
            name="review"
            placeholder="Leave your thing..."
            onChange={handleRatingInput}
            value={inputs.review}
          ></textarea>
          <button className="buttonRating" onClick={handleAddRating}>
            Додати
          </button>
        </div>
        <ul>
          {reviews.map((item, index) => (
            <li className="RatingLI" key={index}>
              {item.firstName} {item.lastName}: <br /> {item.review} <br />{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
