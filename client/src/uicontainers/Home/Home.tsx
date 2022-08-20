import React from 'react';
import { Button } from 'antd';
import Banner from 'components/Banner';
import MovieList from 'components/MovieList';
import styles from './Home.module.scss';

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
        <Button className={styles.viewButton}>VIEW ALL</Button>
      </div>
    </div>
  );
};

export default Home;
