import React from 'react';
import PokemonCard from './PokemonCard';
import {
  Grid,
  Modal,
  Typography,
  CircularProgress,
  Toolbar,
  Box,
  AppBar,
  Textfield,
} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


export default function MainBody({ pokeData }) {
  console.log(pokeData);
  return (
    <>
      <h1>💸(╯‵□′)╯︵┻━┻ </h1>
      {/* {JSON.stringify(pokeData[0])} */}
      {/* {pokeData[0].value("id")} */}
    
      <ul>
        {pokeData.map((item, index) => (
          <li key={item.id}>{item.name} </li>
          // Your code here <PokemonCard id={} name={} sprite={}  />
        ))}
      </ul>

    </>
  );
}