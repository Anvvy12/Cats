import React from 'react';
import './styles/cats-list.scss';
import Cat from './Cat';

const ShowCats = ({ data }) => {
  return (
    <>
      <ol className="cats-list">
        {data.cats.map((cat, index) => (
          <Cat cat={cat} key={cat.id} />
        ))}
      </ol>
    </>
  );
};

export default ShowCats;
