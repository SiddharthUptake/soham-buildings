import React from "react";

const Card = ({ image, title, content }) => {
  return (
    <div className="card bg-dark text-white">
      <img className="card-img" src={image} alt="Card image" />
      <div className="card-img-overlay">
        <h3 className="card-title text-center pt-5 ">{title} </h3>
        <p className="card-tex text-center">{content}</p>
      </div>
    </div>
  );
};

export default Card;
