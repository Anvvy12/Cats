import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCats from './ShowCats';
import Header from './Header';
import './styles/app.scss';

const App = () => {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [sortRiles, setSortRules] = useState({});

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://ftl-cryptokitties.fly.dev/api/crypto_kitties?page=${currentPage}&per_page=$30`,
        )
        .then(({ data }) => {
          setCats([...cats, ...data.cats]);
          setCurrentPage(currentPage + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <ShowCats cats={cats} />
      </main>
    </>
  );
};

export default App;
