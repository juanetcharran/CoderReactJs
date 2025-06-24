import Cart from "./Cart";
const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Distribuidora California</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Promociones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bebidas</a>
                        </li>
                    </ul>
                    <Cart/>
                </div>
            </div>

        </nav>

    )
}

export default NavBar;