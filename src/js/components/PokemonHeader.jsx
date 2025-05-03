import React from "react";
import { useState, useEffect } from "react";



const PokemonHeader = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      const data = await response.json();
      console.log(data);
      setPokemonImage(data.sprites.front_default);
      setError(null); // clear error if success
    } catch (err) {
      console.error(err);
      setError("Pokémon not found");
      setPokemonImage(null);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type a Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button className="showPokemon" onClick={fetchData}>
        Show img of the Pokémon
      </button>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemonImage && (
        <img
          src={pokemonImage}
          alt="Pokemon Sprite"
          style={{ display: "block", marginTop: "10px" }}
        />
      )}
    </>
  );
};

// const PokemonHeader = () => {

    
//     fetchData();

//     async function fetchData () {
//       try{ 
       
//        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         if (!response.ok) {
//             throw new Error("Could not fetch resourse");
            
//         }
//             const data = await response.json();
//             console.log(data);
            
        
      
//     }
//       catch(error){
//         console.error(error);
         
//       }
//     }



//     return (
//         <>
//         <input type="text" placeholder="type a pokemon" id="pokemonName"></input>
//         <button className="showPokemon" onClick={fetchData}>Show img of the pokemon</button><br></br>
        
//         <img src="" style="display: none;" alt="Pokemon Sprite" id="pokemonSprite"/>
        
//         </>
//     )
// }

export default PokemonHeader;