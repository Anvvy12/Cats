import React from 'react';
import './styles/sort-part.scss';

const SortComponent = () => {
  return (
    <div className="sort-part">
      <select>
        <option>sorted by asc</option>
        <option>sorted by desc</option>
      </select>
    </div>
  );
};

export default SortComponent;
