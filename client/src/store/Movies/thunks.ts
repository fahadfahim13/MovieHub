import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchMovies } from 'api/Movies';


export const fetchMovieAsync = createAsyncThunk('movies/fetchMovies', async (props: {limit: number, offset: number}) => {
    const { limit, offset } = props;
    const response = await fetchMovies(limit, offset);
    return response;
});

