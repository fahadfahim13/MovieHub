import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from 'shared/utilityFuntions';
import { CartState, CartAddRemoveAction } from './types';

const initialState: CartState = {
  cartItems: [],
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleAddToCart: (state, action: PayloadAction<CartAddRemoveAction>) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id,
      );
      if (productIndex >= 0 && productIndex < state.cartItems.length) {
        state.cartItems[productIndex].amount += 1;
      } else {
        const items = state.cartItems;
        items.push({
          id: generateId(),
          product: action.payload.product,
          amount: 1,
        });
        state.cartItems = items;
      }
      state.subTotal = state.cartItems.reduce(
        (prev, cur) => prev + cur.amount * cur.product.curPrice,
        0,
      );
    },
    handleRemoveFromCart: (state, action: PayloadAction<CartAddRemoveAction>) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id,
      );
      if (cartIndex >= 0 && cartIndex < state.cartItems.length) {
        if (action.payload.remove || state.cartItems[cartIndex].amount === 1) {
          const items = state.cartItems.filter((item, idx) => item && idx !== cartIndex);
          state.cartItems = items;
        } else {
          state.cartItems[cartIndex].amount -= 1;
        }
      }
      state.subTotal = state.cartItems.reduce(
        (prev, cur) => prev + cur.amount * cur.product.curPrice,
        0,
      );
    },
  },
});

export default cartSlice;
