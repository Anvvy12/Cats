import React from 'react';
import './styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="input-category">
          <input
            type="checkbox"
            id="scales"
            name="sub-zero"
            className="input-category__chekbox"
          ></input>
          <label for="scales" className="input-category__chekbox_label">
            Sub-zero
          </label>
          <input
            type="checkbox"
            id="scales"
            name="slow"
            className="input-category__chekbox"
          ></input>
          <label for="scales" className="input-category__chekbox_label">
            Slow
          </label>
          <input
            type="checkbox"
            id="scales"
            name="middle"
            className="input-category__chekbox"
          ></input>
          <label for="scales" className="input-category__chekbox_label">
            Middle
          </label>
          <input
            type="checkbox"
            id="scales"
            name="fast"
            className="input-category__chekbox"
          ></input>
          <label for="scales" className="input-category__chekbox_label">
            Fast
          </label>
        </div>
        <div className="input-sorting">
          <input type="radio" id="scales" name="asc" className="input-sorting__radio"></input>
          <label for="scales" className="input-sorting__radio_label">
            Asc
          </label>
          <input type="radio" id="scales" name="desc" className="input-sorting__radio"></input>
          <label for="scales" className="input-sorting__radio_label">
            Desc
          </label>
        </div>
        <input type="text" placeholder="name or id" className="navigation__input-name"></input>
      </nav>
    </header>
  );
};

export default Header;
