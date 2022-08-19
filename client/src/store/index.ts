import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './Alert/reducer';
import productReducer from './Products/reducer';
import cartReducer from './Cart/reducer';

export const store = configureStore({
  reducer: {
    alertProp: alertReducer,
    products: productReducer,
    cart: cartReducer,
  },
});
