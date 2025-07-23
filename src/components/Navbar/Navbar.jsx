import { Link } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";
const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Distribuidora California</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="categoriasDropdown">
                                <li><Link className="dropdown-item" to="/categorias/0">ATP</Link></li>
                                <li><Link className="dropdown-item" to="/categorias/1">+18</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <Cart/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;