import Pokemon from "../components/Pokemon";
import { useContext } from "react";
import FavoriteContext from "../components/FavoriteContext";



export default function FavoriteListScreen() {

  const [list, setList] = useContext(FavoriteContext);

  const agregar = (e) => {
    console.log(e)
    // const newPokemon = pokemons.filter((item) => item.id == e)
    // console.log(newPokemon)
    // const updatedItems = [...list, newPokemon];
    // setList(updatedItems);
    // console.log(list)
  };

  return (
    <section className="container">
      <h1>FavoriteListScreen</h1>
      <div className="container">
        <div className="row">
          {list.map((pokemon) => (
            console.log('id='+pokemon.id),
            <Pokemon id={pokemon.id} name= {pokemon.name}  image={pokemon.imageUrl} childClikend={(e)=>agregar(e)} />
            
          ))}
        </div>
      </div>
    </section>
  )
}
