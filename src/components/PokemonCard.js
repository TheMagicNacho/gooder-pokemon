import React from 'react';

export default function PokemonCard({
  pokemon,
  // isTeamCard,
  index,
  // handleRemoveFromTeamClick,
  handleHistoryCardClick,
}) {
  return (
    <div
      className="pokemon-card rounded-corners column"
      // onClick={
        // isTeamCard
        //   ? () => {}
        //   : () => {
            //   handleHistoryCardClick(index);
            // }
      // }
    >
      <h2>{pokemon.name.toUpperCase()}</h2>

      <img src={pokemon.image} alt={pokemon.name}></img>
      {/* {isTeamCard ? (
        <button
          onClick={(e) => {
            handleRemoveFromTeamClick(index);
          }}
        >
          ❌
        </button>
      ) : (
        <></>
      )} */}
    </div>
  );
}

// loop 
