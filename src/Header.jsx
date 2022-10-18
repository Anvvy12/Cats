import React from 'react';
import './styles/header.scss';
const Header = ({ handlerSubmit, setSortRules }) => {
  const handleChange = event => {
    const { name, value } = event.target;
    setSortRules({
      [name]: value,
    });
  };

  return (
    <header className="header">
      <form className="navigation" onSubmit={handlerSubmit}>
        <select className="select" name="category" onChange={handleChange}>
          <option value="" selected disabled hidden>
            Choose category
          </option>
          <option className="select-category__options">Sub-zero</option>
          <option className="select-category__options">Slow</option>
          <option className="select-category__options">Middle</option>
          <option className="select-category__options">Fast</option>
        </select>
        <select className="select" name="price" onChange={handleChange}>
          <option value="" selected disabled hidden>
            Sort by price
          </option>
          <option className="select-category__options">asc</option>
          <option className="select-category__options">desc</option>
        </select>

        <input
          type="text"
          placeholder="Name or id"
          className="navigation__input-name"
          onChange={handleChange}
          name="name"
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
