import { useState, useEffect } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { getFilmById } from 'service/api';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [filmDetails, setАilmDetails] = useState('');

  useEffect(() => {
    getFilmById(movieId).then(res => {
      if (res) {
        return setАilmDetails(res);
      }
    });
  }, [movieId]);

  const { genres, title, vote_average, overview, release_date, poster_path } =
    filmDetails;

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go back</Link>
      {filmDetails && (
        <div>
          <section>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
              />
              <div>
                <h2>
                  {title} ({release_date.substring(0, 4)})
                </h2>
                <p>User Score: {vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(' ')}</p>
              </div>
            </div>
          </section>
          <section>
            <h2>Additional information</h2>
            <Link to={`cast`}>cast</Link>
            <Link to={`reviews`}>reviews</Link>
          </section>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
