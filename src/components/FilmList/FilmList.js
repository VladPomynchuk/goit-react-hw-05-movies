import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmList = ({ films, title }) => {
  const location = useLocation();

  return (
    <>
      {title && <h1>{title}</h1>}
      <ul>
        {films.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default FilmList;
