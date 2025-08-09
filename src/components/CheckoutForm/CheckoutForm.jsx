import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/orders';

const CheckoutForm = () => {
    const { items, totalAmount, clear } = useCart();
    const [buyer, setBuyer] = useState({ name: '', email: ''});
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!items.length) return;
        setLoading(true);
        setError('');
        try {
            const id = await createOrder({ buyer, items, total: totalAmount });
            setOrderId(id);
            clear();
        } catch (err) {
            setError('No se pudo generar la orden. Intenta más tarde.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="alert alert-success">
                ¡Gracias por tu compra! ID de la orden: <strong>{orderId}</strong>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="card p-3">
            <h5 className="mb-3">Datos del comprador</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-2">
                <label className="form-label">Nombre</label>
                <input name="name" className="form-control" value={buyer.name} onChange={handleChange} required />
            </div>
            <div className="mb-2">
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" value={buyer.email} onChange={handleChange} required />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading || !items.length}>
                {loading ? 'Confirmando...' : `Confirmar compra ($${totalAmount.toFixed(2)})`}
            </button>
        </form>
    );
};

export default CheckoutForm;
