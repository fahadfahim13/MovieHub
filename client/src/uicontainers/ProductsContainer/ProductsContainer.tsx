import React from 'react';
import ProductCard from 'components/ProductCard';
import { ProductWrapper } from './ProductContainerStyles';
import { Container, Section } from 'styles/global';
import useProductsLogic from './hook';
import { ProductProps } from './types';

const ProductsContainer = (props: ProductProps) => {
  const { handleAddtoCart } = props;
  const { allProducts, onFavoriteChange, onRatingChange } = useProductsLogic();
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <ProductWrapper>
          {allProducts.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              rating={product.rating}
              onRatingChange={onRatingChange}
              type={product.type}
              curPrice={product.curPrice}
              prevPrice={product.prevPrice}
              onSale={product.onSale}
              isFavorite={product.isFavorite}
              onFavoriteChange={onFavoriteChange}
              image={product.image}
              handleAddtoCart={handleAddtoCart}
            />
          ))}
        </ProductWrapper>
      </Container>
    </Section>
  );
};

export default ProductsContainer;
