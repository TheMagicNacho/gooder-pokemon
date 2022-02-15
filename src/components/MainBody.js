import React from 'react';
import PokemonCard from './PokemonCard';
import {
  Grid,
  Box,
} from '@material-ui/core';
import Button from '@mui/material/Button';

const filter = '';

export default function MainBody({ pokeData }) {

  
  return (
    <>
      <h1>💸(╯‵□′)╯︵┻━┻ </h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>



        {pokeData.map((item, index) => (
          
          <Grid item xs={4} sx={{ border: 1 }}>
          {(item.name).charAt(0).toUpperCase() + (item.name).slice(1)}
          <br></br>
          <img src={item.sprite} alt='cachem all' />
            
          </Grid>
          
        ))}
        
        </Grid>
      </Box>
      
    </>
  );
}