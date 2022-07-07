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
      <ul>
        {cast.map(el => {
          return <CastListItem key={el.id} data={el} />;
        })}
      </ul>
    </div>
  );
};

export default Cast;
