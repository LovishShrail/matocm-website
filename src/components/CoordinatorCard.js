import React from 'react';
import './CoordinatorCard.css';

const CoordinatorCard = ({ name, image }) => {
  return (
    <div className="coordinator-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CoordinatorCard;