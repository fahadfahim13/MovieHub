import { useState } from 'react';
import useCartItems from 'uicontainers/CartContainer/hooks';
import { Product } from 'components/ProductCard/types';

const useCartOptions = () => {
  const [openCart, setOpenCart] = useState(false);
  const { addToCart } = useCartItems();

  const handleAddtoCart = (product: Product) => {
    addToCart(product);
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };
  return {
    openCart,
    handleAddtoCart,
    handleCloseCart,
  };
};

export default useCartOptions;
