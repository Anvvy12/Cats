import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCats from './ShowCats';
import './styles/sort-part.scss';
import './styles/app.scss';

const App = () => {
  /* component with filter*/
  /*component with cats*/

  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   fetch('https://ftl-cryptokitties.fly.dev/api/crypto_kitties')
  //     .then(response => response.json())
  //     .then(res => setCats(res.cats));
  // }, []);

  const [posts, setPosts] = useState({ cats: [], page: 1 });
  const portion = 20;
  const totalPages = Math.ceil(100 / portion);
  const getNewPosts = () => {
    axios
      .get('https://ftl-cryptokitties.fly.dev/api/crypto_kitties', {
        params: {
          per_page: portion,
          page: posts.page,
        },
      })
      .then(({ data }) => {
        setPosts({
          cats: [...posts.cats, ...data.cats],
          page: posts.page + 1,
        });
      });
  };

  //загрузка самой первой порции данных
  useEffect(() => {
    getNewPosts();
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
      <ShowCats data={posts} />
    </main>
  );
};

export default App;
