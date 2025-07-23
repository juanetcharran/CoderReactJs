import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card mx-auto my-4" style={{ maxWidth: '22rem', cursor: 'pointer' }}>
                <img src={product.imagen} className="card-img-top" alt={product.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">Precio: ${product.precio}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            Categoría: {product.categoria == 1 ? '+18' : 'ATP'}
                        </small>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ItemList;