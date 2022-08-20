import React from 'react'
import MovieList from 'components/MovieList';
import { Pagination } from '@mui/material';

const MovieListContainer = () => {
  return (
    <div style={{ marginTop: '5%', marginBottom: 'auto'}}>
        <MovieList />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={10} shape="rounded" />
        </div>
    </div>
  )
}

export default MovieListContainer;