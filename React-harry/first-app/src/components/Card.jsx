import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCTCRF8VMxR63s2WjdXsdLipybRtkfjKTeA&s" alt="" />
      <h1>{props.title}</h1>
      <p>{props.des}</p>
    </div>
  );
};

export default Card;
