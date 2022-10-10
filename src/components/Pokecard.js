import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    return (
        <div className='Pokecard'>
            <h2 className='Pokecard-name'>{props.name}</h2>
            <img className='Pokecard-img' alt='manga' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
            <p className='Pokecard-type'>Type: {props.type}</p>
            <p className='Pokecard-exp'>EXP: {props.exp}</p>
        </div>
    );
};

export default Pokecard;