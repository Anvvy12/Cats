import React from 'react';
import './styles/cats-card.scss';

const Cat = ({ cat }) => {
  const correntClass = cat.available ? 'cat-card' : 'cat-card_notAvailable';
  return (
    <li className={`${correntClass}`}>
      <div className="cat-card__price">🔖 For sale: ${cat.price}</div>
      <img src={cat.image_url} className="cat-card__img"></img>
      <div className="cat-card__description ">
        <span className="cat-card__name">
          Name: {cat.name} <br />
        </span>
        <span className="cat-card__category">Category: {cat.category}</span>
      </div>
    </li>
  );
};

export default Cat;
