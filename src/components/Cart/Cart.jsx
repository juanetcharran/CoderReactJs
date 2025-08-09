import React from 'react';
import { Link } from 'react-router-dom';
import "./cart.css";
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { items, totalAmount, clear } = useCart();

    if (!items.length) {
        return (
            <div className="container my-5">
                <div className="alert alert-info">Tu carrito está vacío.</div>
                <Link to="/" className="btn btn-primary">Ir al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h3 className="mb-4">Carrito</h3>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((it) => <CartItem key={it.id} item={it} />)}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <button className="btn btn-outline-danger" onClick={clear}>Vaciar carrito</button>
                <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0">Total: ${totalAmount.toFixed(2)}</h5>
                    <Link to="/checkout" className="btn btn-success">Ir a pagar</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
