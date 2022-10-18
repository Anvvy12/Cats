import React from 'react';
import './styles/cats-list.scss';
import Cat from './Cat';

const ShowCats = ({ cats }) => {
  return (
    <>
      <ol className="cats-list">
        {cats.map(cat => (
          <Cat cat={cat} />
        ))}
      </ol>
    </>
  );
};

export default ShowCats;
