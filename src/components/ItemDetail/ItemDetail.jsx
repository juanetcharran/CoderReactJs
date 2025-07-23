import React from 'react';

const ItemDetail = ({ product }) => {
    if (!product) {
        return <div className="alert alert-danger mt-3">¡Error! No hay producto con este identificador.</div>;
    }

    return (
        <div className="container my-5">
            <div className="row align-items-center bg-light rounded shadow p-4">
                <div className="col-md-5 text-center">
                    <img
                        src={product.imagen}
                        className="img-fluid rounded"
                        alt={product.nombre}
                        style={{ maxHeight: '320px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-7">
                    <h2 className="display-5 fw-bold mb-3">{product.nombre}</h2>
                    <h4 className="text-primary mb-3">Precio: ${product.precio}</h4>
                    <p className="mb-2">
                        <span className="badge bg-secondary fs-6">
                            Categoría: {product.categoria == 1 ? '+18' : 'ATP'}
                        </span>
                    </p>
                    <div className="d-flex align-items-center mb-3">
                        <button className="btn btn-outline-secondary">-</button>
                        <span className="mx-3 fs-5">1</span>
                        <button className="btn btn-outline-secondary">+</button>
                    </div>
                    <button className="btn btn-success">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;