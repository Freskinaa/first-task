import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <h1>{card.title}</h1>
      <p>{card.description}</p>
      <img src={card.imageUrl} alt="" />
      <p>
        {card.features.map((feature, index) => (
          <span key={index}>
            {feature}
            {index < card.features.length - 1 && <span>, </span>}
          </span>
        ))}
      </p>
      <h5>{card.price}</h5>
    </div>
  );
};

export default Card;
