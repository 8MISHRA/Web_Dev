import React from 'react';

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img alt={title} height="200" src={imgSrc} width="300" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
