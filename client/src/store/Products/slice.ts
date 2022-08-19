import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_PRODUCTS } from 'data/products';

import { ProductsState, ProductUpdateAction } from './types';

const initialState: ProductsState = {
  status: 'idle',
  data: ALL_PRODUCTS,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleUpdateProducts: (state, action: PayloadAction<ProductUpdateAction>) => {
      state.data[action.payload.id] = {
        ...state.data[action.payload.id],
        ...action.payload.data,
      };
    },
  },
});

export default productSlice;
