import React from 'react';
import './styles/cats-card.scss';

const Cat = ({ cat }) => {
  const correntClass = cat.available ? 'cat-card__img' : 'cat-card__img notAvailable';
  const isForSale = cat.available ? `🔖 For sale: $${cat.price}` : '❌ Not for sale';

  return (
    <li className="cat-card">
      <div className="cat-card__price">{isForSale}</div>
      <img src={cat.image_url} className={correntClass}></img>
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
