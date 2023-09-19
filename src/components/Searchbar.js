import React, {useState} from 'react';
import { searchPokemon } from "../api";
import '../App.css';

const Searchbar = () => {
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
        
            <div className="searchbar-btn">
                <button onClick= {onButtonClickHandler}>Consultar</button>
            </div>
            {pokemon ? (
                <div className="props">
                    <span>Nome: {pokemon.name}</span>
                    <br/>
                    <span>Id: {pokemon.id}</span>
                    <br/>
                    <span>Peso: {pokemon.weight / 10} Kg</span>
                    <br/>
                    <span>Altura: {pokemon.height / 10} metros</span>
                    <br/>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar;