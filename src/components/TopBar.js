import React from 'react';
import SearchBar from './SearchBar';
// import Logo from './pocketMonsters.png';
// import Image from 'material-ui-image';
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
                sx={{height: 64, width: 64}}
                alt="Pokemon"
                src="null"
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
