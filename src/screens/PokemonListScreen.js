import { useContext } from "react";
import FavoriteContext from "../components/FavoriteContext";
import Pokemon from "../components/Pokemon";


export default function PokemonListScreen() {

  //const [pokemons, setPokemons] = useState([]);
  //const [list, setList] = useState([]);
  // const FavoritoContext = createContext();
  const {pokemons, agregar} =  useContext(FavoriteContext) 

 
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
