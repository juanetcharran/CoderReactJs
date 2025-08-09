import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { updateAmount: updateAmount, removeItem } = useCart();
    const stock = item.stock ?? 99;
    return (
        <tr>
            <td className="align-middle">
                <img src={item.imagen} alt={item.nombre} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8, marginRight: 8 }} />
                {item.nombre}
            </td>
            <td className="align-middle">${item.precio}</td>
            <td className="align-middle" style={{ maxWidth: 120 }}>
                <input
                    type="number"
                    className="form-control"
                    value={item.amount}
                    min={1}
                    max={stock}
                    onChange={(e) => updateAmount(item.id, Number(e.target.value), stock)}
                />
            </td>
            <td className="align-middle">${(item.amount * item.precio).toFixed(2)}</td>
            <td className="align-middle">
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>Quitar</button>
            </td>
        </tr>
    );
};

export default CartItem;
