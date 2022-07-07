import FilmList from 'components/FilmList';
import { useGetTrendingFilms } from 'hooks/useGetTrendingFilms';

const Home = () => {
  const trendingFilms = useGetTrendingFilms();

  return (
    <div>
      <FilmList films={trendingFilms} />
    </div>
  );
};

export default Home;
