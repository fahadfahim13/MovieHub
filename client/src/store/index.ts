import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './Alert/reducer';
import movieReducer from './Movies/reducer';
import cartReducer from './Cart/reducer';

export const store = configureStore({
  reducer: {
    alertProp: alertReducer,
    movies: movieReducer,
    cart: cartReducer,
  },
});
