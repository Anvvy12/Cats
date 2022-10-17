import React from 'react';
import './styles/cats-list.scss';
import Cat from './Cat';

const ShowCats = ({ cats }) => {
  //   const [cats, setCats] = useState([]);

  //   useEffect(() => {
  //     fetch('https://ftl-cryptokitties.fly.dev/api/crypto_kitties')
  //       .then(response => response.json())
  //       .then(res => setCats(res.cats));
  //   }, []);

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
