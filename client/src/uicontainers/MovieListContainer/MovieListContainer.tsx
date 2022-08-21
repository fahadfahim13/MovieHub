import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import MovieList from 'components/MovieList';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchMovieAsync } from 'store/Movies/thunks';
import { selectMoviesCount } from 'store/Movies/selectors';

const MovieListContainer = () => {

  const dispatch = useAppDispatch();
  const totalMovies = useAppSelector(selectMoviesCount);

  const [state, setstate] = useState({ limit: 9, offset: 0 })

  useEffect(() => {
    dispatch(fetchMovieAsync({ limit: state.limit, offset: state.offset }));
  }, [state.offset]);

  const onPageChange = (event: ChangeEvent<unknown>, page: number) => {
    console.log(event);
    setstate({
      ...state,
      offset: (page - 1) * 9,
    })
  }
  
  return (
    <div style={{ marginTop: '1%', marginBottom: '3%'}}>
      <MovieList showActor={true} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={totalMovies % 9 === 0? parseInt((totalMovies/9).toString(), 10): parseInt((totalMovies/9).toString(), 10)+1} shape="rounded" onChange={onPageChange} />
      </div>
    </div>
  )
}

export default MovieListContainer;