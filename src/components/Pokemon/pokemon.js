import './pokemon.css'
import axios from 'axios'
import React, {useEffect, useState} from 'react';

function Pokemon({endpoint}) {
    const [pokemon,setpokemon] = useState(null);

    useEffect(() => {
        console.log(endpoint);

        async function fetchData() {
            try {
                const {data} = await axios.get(endpoint);
                setpokemon(data);
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    },[endpoint]);

    return (
        <section className="poke-card">
            {pokemon &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img
                        alt="Afbeelding pokémon"
                        src={pokemon.sprites.front_default}
                    />
                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <p><strong>Abilities: </strong></p>
                    <ul>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <li key={`${ability.ability.name}-${pokemon.name}`}>
                                    {ability.ability.name}
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </section>
    );
}



export default Pokemon;