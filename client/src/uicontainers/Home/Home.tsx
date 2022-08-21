import React, { useEffect } from 'react';
import { Button } from 'antd';
import Banner from 'components/Banner';
import MovieList from 'components/MovieList';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/routes/constants';
import { useAppDispatch } from 'store/hooks';
import { fetchMovieAsync } from 'store/Movies/thunks';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAsync({limit: 6, offset: 0}));
  }, [])
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Movie List top 6 */}
      <div>
        <MovieList />
        <br />
      </div>
      {/* View All Button */}
      <div className={styles.buttonContainer}>
        <Link to={ROUTES.PATHS.LISTS}>
          <Button className={styles.viewButton}>VIEW ALL</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
