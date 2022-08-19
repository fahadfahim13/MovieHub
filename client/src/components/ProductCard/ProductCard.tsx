import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { ProductSectionProps } from './types';
import { Row, Col } from 'styles/global';
import {
	ProductColumn, SaleButton, ProdImgWrapper, ProdImage, ProdImageColumn, CategoryTitle, ProductTitle
} from './ProductCardStyles';


const ProductCard = (product: ProductSectionProps) => {
  const { id, name, rating, onRatingChange, type, curPrice, prevPrice=curPrice, onSale=false, image, isFavorite=false, onFavoriteChange = () => {}, handleAddtoCart } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="div"
        style={{ width: '90%', height: '150px', marginLeft: '5%', marginTop: '5%', backgroundColor: "#E8F0D6"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard