import React, { useEffect, useState } from 'react';
import ShowCats from './ShowCats';
import './styles/sort-part.scss';
import './styles/app.scss';

const App = () => {
  /* component with filter*/
  /*component with cats*/

  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://ftl-cryptokitties.fly.dev/api/crypto_kitties')
      .then(response => response.json())
      .then(res => setCats(res.cats));
  }, []);

  return (
    <main className="main">
      <div className="sort-part">
        <select>
          <option value="asc">sorted by asc</option>
          <option value="desc">sorted by desc</option>
        </select>
        <input type="text" />
      </div>
      <ShowCats cats={cats} />
    </main>
  );
};

export default App;
