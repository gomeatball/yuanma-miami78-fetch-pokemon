import React from "react";
import { useState, useEffect } from "react";

const PokemonHeader = () => {

    
    fetchData();

    async function fetchData () {
      try{ response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        if (!response.ok) {
            throw new Error("Could not fetch resourse");
            
        }
            const data = await response.json();
            console.log(data);
            
        
      
    }
      catch(error){
        console.error(error);
         
      }
    }



    return (
        <>
        <input type="text" placeholder="type a pokemon" value={} id="pokemonName"></input>
        <button className="showPokemon" onClick={fetchData()}>Show img of the pokemon</button><br></br>
        
        <image src="" style="display: none;"/>
        
        </>
    )
}

export default PokemonHeader;