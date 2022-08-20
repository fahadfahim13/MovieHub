import React from 'react'
import { Paper } from '@mui/material'
import banner from 'media/images/banner.png';

const Banner = () => {
  return (
    <Paper style={{ width: '100%'}}>
        <img style={{width: '100%'}} src={banner} alt='banner' />
    </Paper>
  )
}

export default Banner