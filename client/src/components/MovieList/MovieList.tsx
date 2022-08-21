import React from 'react';
import MovieCard from 'components/MovieCard';
import { Col, Row } from 'antd';
import { useAppSelector } from 'store/hooks';
import { selectMovies } from 'store/Movies/selectors';

const MovieList = ({ showActor = false }) => {
  const movies = useAppSelector(selectMovies);

  return (
    <div style={{ marginTop: '5%', marginBottom: '3%', width: '100%', display: 'inline-block', paddingLeft: '20%', paddingRight: '15%' }}> 
    {movies.map((movie, index) => 
      <section style={{width: '30%', float: 'left', padding: '20px'}}>
        <MovieCard id={index} title={movie.title} description={movie.description} actors={[]} showActor={showActor} image={movie.image} />
      </section>
    )}
    </div>
  );
};

export default MovieList;
