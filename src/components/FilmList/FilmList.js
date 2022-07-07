import { Link } from 'react-router-dom';

const FilmList = ({ films }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilmList;
