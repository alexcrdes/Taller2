import { createContext, useEffect } from "react";
import { useState } from "react";

const FavoriteContext = createContext();



const FavoriteProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then(({ results }) => {
        setPokemons(results.map((pokemon, index) => ({
          ...pokemon,
          id: 
           index + 1,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          favorito : false
        })));
      });
  }, []);

  const agregar = (e) => {
    console.log(e)
    const newPokemon = pokemons.filter((item) => item.id === e)
    // newPokemon[0].favorito = true

    // const modItems = [...pokemons];
    // modItems.splice(newPokemon[0].index, 1, newPokemon[0]);
    // setPokemons(updatedItems);

    //console.log(newPokemon[0])
    const updatedItems = [...list, newPokemon[0]];
    setList(updatedItems);
    //console.log(list)

  };

    const data ={list,pokemons,agregar}
    return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
    
  }

export {FavoriteProvider};
export default FavoriteContext;