import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFilmReviews(movieId).then(res => {
      if (Array.isArray(res)) {
        setReviews(res);
      }
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
