import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import logo from './assets/International_Pokémon_logo.svg.png'
import Button from './components/Button/Button'
import Pokemon from "./components/Pokemon/pokemon";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);

            try {
                const {data} = await axios.get(endpoint);
                setPokemons(data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        }
        fetchData();
    },[endpoint]);
    return (
        <div className="poke-dex">
            {pokemons &&
            <>
            <img src={logo} alt="logo" width="400px"/>
            <section className="button-bar">
                <Button
                disabled={!pokemons.next}
                clickHandler={()=> setEndpoint(pokemons.next)}

                >Meer Pokémons
                </Button>
                <Button
                    disabled={!pokemons.previous}
                    clickHandler={() => setEndpoint(pokemons.previous)}
                >
                    Vorige Pokémons
                </Button>
            </section>
                {pokemons.results && pokemons.results.map((pokemon) => {
                    return <Pokemon key={pokemon.name} endpoint={pokemon.url} />
                })}
            </>
            }
            {loading && <p>Trying to catch 'm all... </p>}
            {error && <p>Almost cought it and it was so close to!!</p>}
        </div>
    );
}

export default App;
