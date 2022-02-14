import React from 'react';
// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// CUSTOM
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainBody from './components/MainBody';

let searchTerm = 'name';


export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemonObject: undefined,
        }
    }
    async componentDidMount(){
        // make a request and wait
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        // parse out the response json
        let pokeList = await response.json()
        // ONCE we have the info, set into the state
        this.setState({ pokemonObject: pokeList })
      }

      // TODO: turn object into cards

    render(){
        return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  {/* REMOVE THE sx={{ border: 1}} in production */}
                <Grid item xs={12} sx={{ border: 1 }}>
                    <TopBar />
                </Grid>
                <Grid item xs={9} sx={{ border: 1}}>
                    <MainBody />
                </Grid>
                <Grid item xs={3} sx={{ border: 1 }}>
                    <SideBar />
                </Grid>
              </Grid>
            </Box>
          );
    }

}

// export default function App() {
//   // handleSearchClick(e) {
//     // 
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//           {/* REMOVE THE sx={{ border: 1}} in production */}
//         <Grid item xs={12} sx={{ border: 1 }}>
//             <TopBar />
//         </Grid>
//         <Grid item xs={9} sx={{ border: 1}}>
//             <MainBody />
//         </Grid>
//         <Grid item xs={3} sx={{ border: 1 }}>
//             <SideBar />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

/*
TopBar
- Search bar
- logo
SideBar
- team Cards
- team list
MainBody
- filtered pokemon
- add to team button - on each card in pokedex when selected
*/