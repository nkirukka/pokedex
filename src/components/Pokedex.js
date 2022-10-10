import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {

    
    return (
        <>
            <div className='desc'>
                <h2 className={props.isWinner ? 'win' : 'lose'}>{props.isWinner ? 'Winning Hand' : 'Losing Hand'}</h2>
                <p>Total experience: {props.exp}</p>

            </div>
            <div className='wrapper'>
                {props.pokemon.map((i) => {
                    return <Pokecard
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        type={i.type}
                        exp={i.base_experience}
                    />
                })}
        
            </div>
        </>
    );
}

export default Pokedex;