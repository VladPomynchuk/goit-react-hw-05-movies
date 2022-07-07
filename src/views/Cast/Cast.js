import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'service/api';
import CastListItem from 'components/CastListItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getFilmCast(movieId).then(res => {
      if (Array.isArray(res)) {
        setCast(res);
      }
    });
  }, [movieId]);

  return (
    <div>
      {cast ? (
        <ul>
          {cast.map(el => {
            return <CastListItem key={el.id} data={el} />;
          })}
        </ul>
      ) : (
        <p>Sorry, we don't have information</p>
      )}
    </div>
  );
};

export default Cast;
