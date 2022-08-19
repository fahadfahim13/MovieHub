import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCart } from 'store/Cart/selectors';
import { handleAddToCart, handleRemoveFromCart } from 'store/Cart/actions';
import { Product } from 'components/ProductCard/types';

const useCartItems = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const addToCart = (product: Product) => {
    dispatch(handleAddToCart({ product }));
  };

  const decreaseFromCart = (product: Product, remove?: boolean) => {
    dispatch(handleRemoveFromCart({ product, remove: remove ?? false }));
  };

  return {
    cartItems: cart.cartItems,
    addToCart,
    decreaseFromCart,
    cartTotal: cart.subTotal,
  };
};

export default useCartItems;
