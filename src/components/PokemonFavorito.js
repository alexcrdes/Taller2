
import nomegusta from "../imagen/icons8-me-gusta-16 (1).png"; 
import megusta from "../imagen/icons8-me-gusta-16.png"; 

export default function PokemonFavorito({id,name,image, favorito}){
    return (

            <div key={id} className="card" style={{width: "12rem", borderRadius: 10, marginLeft: 5, marginBottom: 5,border: '1px solid black'}}>
              <a><img src={favorito? megusta : nomegusta} /></a>
              <img src={image} className="card-img-top" alt="..." />
                <div className="card-body bg-warning" >
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
    )
  }