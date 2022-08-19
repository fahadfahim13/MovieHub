import { CartItem } from 'components/CartItem/types';
import { Product } from 'components/ProductCard/types';

export interface CartState {
  cartItems: CartItem[];
  subTotal: number;
}

export interface CartAddRemoveAction {
  product: Product;
  remove?: boolean;
}
