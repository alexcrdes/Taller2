
export default function Pokemon({id,name,image, childClikend}){
    return (
            // <div key={id} className="card" style={{width: "12rem"}}>
            // <img src={image} className="card-img-top" alt="..." />
            //     <div className="card-body bg-warning" >
            //         <h5 className="card-title">{name}</h5>
            //         <p className="card-text lead">{name}</p>
            //     </div>
            // </div>
            <div key={id} className="card" style={{width: "12rem"}}>
              {/* <a onClick={() =>agregar(pokemon.id)}><img src={logo}/></a> */}
              <button  onClick={() => childClikend(id)}>x</button>
              <img src={image} className="card-img-top" alt="..." />
                <div className="card-body bg-warning" >
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text lead">{name}</p>
                </div>
            </div>
    )
  }