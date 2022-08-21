import { Movie } from 'components/MovieCard/types';

export interface MoviesState {
  status: 'idle' | 'pending' | 'success' | 'rejected';
  data: Movie[];
}

export interface MovieUpdateAction {
  id: number;
  data: Movie;
}
