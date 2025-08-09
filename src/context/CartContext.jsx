import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (product, amount) => {
        setItems((prev) => {
            const index = prev.findIndex((p) => p.id === product.id);
            const max = product.stock ?? 99;

            if (index >= 0) {
                const next = [...prev];
                const newAmount = Math.min(next[index].amount + amount, max);
                next[index] = { ...next[index], amount: newAmount };
                return next;
            }
            return [...prev, { ...product, amount: Math.min(amount, max) }];
        });
    };

    const updateAmount = (id, amount, stock) => {
        setItems((prev) => prev.map((p) => (p.id === id ? { ...p, amount: Math.max(1, Math.min(amount, stock ?? p.stock ?? 99)) } : p)));
    };

    const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

    const clear = () => setItems([]);

    const totalUnits = useMemo(() => items.reduce((acc, p) => acc + p.amount, 0), [items]);
    const totalAmount = useMemo(() => items.reduce((acc, p) => acc + p.amount * p.precio, 0), [items]);

    const value = useMemo(
        () => ({ items, addItem, updateAmount, removeItem, clear, totalUnits, totalAmount }),
        [items, totalUnits, totalAmount]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};

export default CartContext;
