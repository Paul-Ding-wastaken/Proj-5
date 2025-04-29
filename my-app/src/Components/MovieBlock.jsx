import React, { useEffect, useState } from 'react';
import './MovieBlock.css';
import { Link } from 'react-router-dom';
import LoggedContext from './loggedContext';
import { useContext } from 'react';


function MovieBlock(x) {
  console.log(x);
  const { logged, setLogged } = useContext(LoggedContext);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    if (x.poster_path) {
      const url = `https://image.tmdb.org/t/p/w500${x.poster_path}`;
      setImageUrl(url);
    }
  }, [x.poster_path]);

  return (
    <>
      {logged == true ? (
        <Link className="movie-block" to={`/Details/${x.id}`} style={{ textDecoration: 'none' }}>
          <img src={imageUrl} style={{ cursor: 'pointer' }} />
        </Link>
      ) : (
        <Link className="movie-block" to='/Login' style={{ textDecoration: 'none' }}>
          <img src={imageUrl} style={{ cursor: 'pointer' }} />
        </Link>
      )}
    </>
  );
}

export default MovieBlock;
