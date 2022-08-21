import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { MovieProps } from './types';
import ActorItem from 'components/ActorItem';


const MovieCard = (movie: MovieProps) => {
  const { id, title, description, showActor, actors } = movie;

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia
        component="div"
        style={{ width: '90%', height: '150px', marginLeft: '5%', marginTop: '5%', backgroundColor: "#E8F0D6"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ActorItem />
        <ActorItem />
      </CardActions>
    </Card>
  )
}

export default MovieCard;