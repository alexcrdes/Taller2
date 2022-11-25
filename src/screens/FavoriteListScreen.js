import Pokemon from "../components/Pokemon";
import { useContext } from "react";
import FavoriteContext from "../components/FavoriteContext";
import PokemonFavorito from "../components/PokemonFavorito";



export default function FavoriteListScreen() {

  const {list, agregar} = useContext(FavoriteContext);


  return (
    <section className="container">
      <h1>FavoriteListScreen</h1>
      <div className="container">
        <div className="row">
          {list.map((pokemon) => (
            <Pokemon id={pokemon.id} name= {pokemon.name}  image={pokemon.imageUrl} favorito={pokemon.favorito} childClikend={(e)=>agregar(e)} />
            // <PokemonFavorito id={pokemon.id} name= {pokemon.name}  image={pokemon.imageUrl} favorito={pokemon.favorito} />
          ))}
        </div>
      </div>
    </section>
  )
}
