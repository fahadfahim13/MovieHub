import { RootState } from 'store/types';

export const selectMovies = (state: RootState) => state.movies.data;
