import React from 'react';
import '../styles/Card.css';// Ensure you create a CSS file for card styles

const Card = ({ card, onClick }) => (
  <div className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card.id)}>
    <div className="card-inner">
      <div className="card-front">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="card-back">
        <span>?</span>
      </div>
    </div>
  </div>
);

export default Card;