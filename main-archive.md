```jsx
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import {
  Grid,
  Modal,
  Typography,
  CircularProgress,
  Toolbar,
  Box,
  AppBar,
  TextField,
} from '@material-ui/core';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@mui/system';

const filter = '';

export default function MainBody({ pokeData }) {

  // const styleModal = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: '#FFFFFF',
  //   border: '2px solid #FF4FA74',
  //   boxShadow: 24,
  //   p: 4,
  // };
  //   const useStyles = makeStyles((theme) => ({
  //   pokedexContainer: {
  //     paddingTop: "20px",
  //     paddingLeft: "50px",
  //     paddingRight: "50px",
  //   },
  //   cardMedia: {
  //     margin: "auto",
  //     main: '#DEBEBE',
  //   },
  //   cardContent: {
  //     textAlign: "center",
  //   },
  
  // }));



  return(
      <>


     
     
{/* 
      {pokeData ? (

            <Grid container onClick={handleOpen} spacing={2} className={classes.pokedexContainer}>
              {Object.keys(pokeData).map( function(pokemonId){
                // {pokeData.map((item, index) => 
                  // pokeData[index].name.includes(filter),
                        return(
                          pokeData[pokemonId].name.includes(filter),
                          <Modal
                          open={open}
                          >
                          <Box sx={styleModal}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              {pokeData[pokemonId].name}
                              {/* {pokeData[index].name} 
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              lorem ispum
                            </Typography>
                          </Box>
                        </Modal>
                        )
                      })}
            </Grid>
            ) : ( <CircularProgress /> )
      } */}
      
      </>
  );
};

//   console.log(pokeData);
//   return (
//     <>
//       <h1>💸(╯‵□′)╯︵┻━┻ </h1>
//       {/* {JSON.stringify(pokeData[0])} */}
//       {/* {pokeData[0].value("id")} */}
    
//       <ul>
//         {pokeData.map((item, index) => (
//           <li key={item.id}>{item.name} </li>
//           // Your code here <PokemonCard id={} name={} sprite={}  />
//         ))}
//       </ul>

//     </>
//   );
// }
```