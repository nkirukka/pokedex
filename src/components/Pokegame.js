import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = () => {
  const pokemon = [
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  ];

  let hand1 = [];
  let hand2 = [...pokemon];
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length)
    
    // Remove from hand2 and push to hand1
    let randPoke = hand2.splice(randIdx, 1)[0];
    hand1.push(randPoke)
  }
  // Sum of exp
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  return (
    <>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      
    </>
  );
}

export default Pokegame;