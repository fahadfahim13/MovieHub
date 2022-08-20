import React from 'react';
import { Button } from 'antd';
import Banner from 'components/Banner';
import MovieList from 'components/MovieList';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/routes/constants';

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Movie List top 6 */}
      <div>
        <MovieList />
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
