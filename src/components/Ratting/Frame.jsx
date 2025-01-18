import React from "react";
import "./Frame.css";
import { useState } from "react";

const Frame = () => {
  const [Image, setImage] = useState(null);

  const handleImagesSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container">
      <input type="file" accept="image/*" onChange={handleImagesSelect} />
      <div className="image-wrapper">
        {Image && <img src={Image} alt="Selected" />}
      </div>
    </div>
  );
};

export default Frame;
