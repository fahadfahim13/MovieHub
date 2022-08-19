import { Product } from 'components/ProductCard/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { handleUpdateProducts } from 'store/Products/actions';
import { selectProducts } from 'store/Products/selectors';

const useProductsLogic = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectProducts);

  const onFavoriteChange = (id: number) => {
    const prod: Product = {
      ...allProducts[id],
      isFavorite: !allProducts[id].isFavorite,
    };
    dispatch(handleUpdateProducts({ id, data: prod }));
  };

  const onRatingChange = (id: number, rating: number) => {
    const prod: Product = {
      ...allProducts[id],
      rating: rating,
    };
    dispatch(handleUpdateProducts({ id, data: prod }));
  };

  return {
    allProducts,
    onFavoriteChange,
    onRatingChange,
  };
};

export default useProductsLogic;
