import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    const pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

    // ### Function to add leading zeros to numbers
    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    const imgSrc = `${pokeApi}${padToThree(props.id)}.png`;

    return (
        <div className='Pokecard'>
            <h2 className='Pokecard-name'>{props.name}</h2>
            <img className='Pokecard-img'alt={props.name} src={imgSrc} />
            <p className='Pokecard-type'>Type: {props.type}</p>
            <p className='Pokecard-exp'>EXP: {props.exp}</p>
        </div>
    );
};

export default Pokecard;