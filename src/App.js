import React from 'react';
// MATERIAL
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// CUSTOM
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainBody from './components/MainBody';
// import PokemonCard from './components/PokemonCard';


const url = `https://pokeapi.co/api/v2/pokemon?limit=100`; // the base url for searching a pokemon, minus the actual number or name

export default function App (){
  const [pokeData, setPokeData]= React.useState([]);
  const searchRef = React.useRef();

  React.useEffect(()=>{
    async function fetchRandomPokemon(){
        const response = await fetch(url);
        const result = await response.json();
        const pokeList = result.results;

        let outputArray = [];

        pokeList.forEach((pokemon, index)=>{
            let newPokemonData = {};
            let currentIndex = index + 1;

            newPokemonData = {
                id: currentIndex,
                name: pokemon.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentIndex}.png`,
            }
            outputArray.push(newPokemonData);
        });
        setPokeData(outputArray);
    }
    fetchRandomPokemon();
  },[]);







  // const getPokemonCard = (pokemonId) => {
  //     const { id, name, sprite } = pokemonData[pokemonId];
  //     return (
  //       <Grid item xs={4} key={pokemonId}>
  //         <Card onClick={() => history.push(`/${id}`)}>
  //           <CardMedia
  //             className={classes.cardMedia}
  //             image={sprite}
  //             style={{ width: "130px", height: "130px" }}
  //           />
  //           <CardContent className={classes.cardContent}>
  //             <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //     );
  //   };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* REMOVE THE sx={{ border: 1}} in production*/} 
          <Grid item xs={12} sx={{ border: 1 }}>
            <TopBar />
          </Grid>
          <Grid item xs={9} sx={{ border: 1 }}>
            <MainBody pokeData={pokeData}/>
          </Grid>
          <Grid item xs={3} sx={{ border: 1 }}>
            <SideBar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}


// export default class App extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             pokemonObject: undefined,
//         }
//     }
//     async componentDidMount(){
//         // make a request and wait
//         let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
//         // parse out the response json
//         let pokeList = await response.json()
//         // ONCE we have the info, set into the state
//         this.setState({ pokemonObject: pokeList })
//       }

//       // TODO: turn object into cards

//     render(){
//         return (
//             <Box sx={{ flexGrow: 1 }}>
//               <Grid container spacing={2}>
//                   {/* REMOVE THE sx={{ border: 1}} in production */}
//                 <Grid item xs={12} sx={{ border: 1 }}>
//                     <TopBar />
//                 </Grid>
//                 <Grid item xs={9} sx={{ border: 1}}>
//                     <MainBody />
//                 </Grid>
//                 <Grid item xs={3} sx={{ border: 1 }}>
//                     <SideBar />
//                 </Grid>
//               </Grid>
//             </Box>
//           );
//     }
// }

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