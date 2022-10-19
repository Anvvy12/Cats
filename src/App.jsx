import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCats from './ShowCats';
import Header from './Header';
import './styles/app.scss';

const App = () => {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [sortRules, setSortRules] = useState({ sort_dir: 'asc', sort_by: 'id' });

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://ftl-cryptokitties.fly.dev/api/crypto_kitties?page=${currentPage}&per_page=30`,
          {
            params: {
              sort_dir: sortRules.sort_dir,
              sort_by: sortRules.sort_by,
            },
          },
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

  const handlerSubmit = () => {
    setCats([]);
    setCurrentPage(1);
    setCats([...cats, ...data.cats]);
    setFetching(true);
  };

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
      <Header
        handlerSubmit={handlerSubmit}
        setSortRules={setSortRules}
        sortRules={sortRules}
        setFetching={setFetching}
      />
      <main className="main">
        <ShowCats cats={cats} />
      </main>
    </>
  );
};

export default App;
