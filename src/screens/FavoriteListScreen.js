

export default function FavoriteListScreen() {

  const [user, setUser] = useContext(UserContext);


  return (
    <section className="container">
      <h1>FavoriteListScreen</h1>
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
