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
      {reviews.length > 0 ? (
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
      ) : (
        <p>Sorry, we don't have information</p>
      )}
    </div>
  );
};

export default Reviews;
