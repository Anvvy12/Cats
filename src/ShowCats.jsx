import React, { createRef } from 'react';
import './styles/cats-list.scss';
import Cat from './Cat';

const ShowCats = ({ cats }) => {
  return (
    <>
      <ol className="cats-list">
        {cats.map(cat => {
          return <Cat cat={cat} key={cat.id} />;
        })}
      </ol>
    </>
  );
};

export default ShowCats;
