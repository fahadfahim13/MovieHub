import { Product } from 'components/ProductCard/types';

export interface ProductsState {
  status: 'idle' | 'pending' | 'success' | 'rejected';
  data: Product[];
}

export interface ProductUpdateAction {
  id: number;
  data: Product;
}
