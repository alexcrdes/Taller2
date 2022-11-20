import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <span className="navbar-brand">Pokemons</span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link btn btn-link">
                Listado
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link btn btn-link">
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
 }
 