import React from 'react';
import './styles/header.scss';
const Header = ({ handlerSubmit, setSortRules, sortRules, setFetching }) => {
  const handleChange = event => {
    const { name, value } = event.target;
    setSortRules({
      ...sortRules,
      [name]: value,
    });
    setFetching(true);
  };

  return (
    <header className="header">
      <form className="navigation" onChange={handlerSubmit}>
        <select className="select" name="sort_by" onChange={handleChange}>
          <option value="" selected disabled hidden defaultValue="">
            Sorting by
          </option>
          <option className="select-category__options" value="id">
            Id
          </option>
          <option className="select-category__options" value="category">
            Category
          </option>
          <option className="select-category__options" value="name">
            Name
          </option>
          <option className="select-category__options" value="price">
            Price
          </option>
        </select>
        <select className="select" name="sort_dir" onChange={handleChange}>
          <option value="" selected disabled hidden defaultValue="">
            Sort by price
          </option>
          <option className="select-category__options" value="asc">
            asc
          </option>
          <option className="select-category__options" value="desc">
            desc
          </option>
        </select>

        {/* <input
          type="text"
          placeholder="Name or id"
          className="navigation__input-name"
          onChange={handleChange}
          name="sort_by"
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button> */}
      </form>
    </header>
  );
};

export default Header;
