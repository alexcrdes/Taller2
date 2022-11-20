import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Pokemon from "../components/Pokemon";
import logo from "../imagen/icons8-añadir-48.png"; 

export default function PokemonListScreen() {

  const [pokemons, setPokemons] = useState([]);
  const [list, setList] = useState([]);
  const FavoritoContext = createContext();


  
  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(response => response.json())
        .then(({ results }) => {
          setPokemons(results.map((pokemon, index) => ({
            ...pokemon,
            id: 
             index + 1,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          })));
          // [{ name: '...', id: 1, url: '...', imageUrl: '' }]
        });
    }, []);


    const agregar = (e) => {
      console.log(e)
      const newPokemon = pokemons.filter((item) => item.id == e)
      console.log(newPokemon)
      const updatedItems = [...list, newPokemon];
      setList(updatedItems);
      console.log(list)
    };

    function FavoritoProvider({ children }) {
    
      return (
        <FavoritoContext.Provider value={[list, setList] }>
          {children}
        </FavoritoContext.Provider>
      )
    }
 
  return (
    <section className="container">
      <h1>PokemonListScreen</h1>

      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <Pokemon id={pokemon.id} name= {pokemon.name}  image={pokemon.imageUrl} childClikend={(e)=>agregar(e)} />
            
          ))}
        </div>
      </div>
    </section>

  )
}
