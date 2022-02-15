import React from 'react';
import SearchBar from './SearchBar';

import PokemonLogo from "../img/PokemonLogo.png";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



export default function TopBar() {

    
  return (
    <>
      <div>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>

            <Box
                component="img"
                sx={{height: 50, width: 100}}
                alt="Pokemon"
                src={PokemonLogo}
            />
            </Grid>
            <Grid item xs={6}>
                <SearchBar />
            </Grid>
        </Grid>
      </div>
    </>
  );
}
