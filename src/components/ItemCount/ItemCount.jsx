import React, { useEffect, useState } from 'react';

const ItemCount = ({ initial = 1, min = 1, max = 99, onChange, onConfirm, disabled = false }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    useEffect(() => {
        onChange?.(count);
    }, [count, onChange]);

    const handleDecrease = () => {
        if (disabled) return;
        setCount((c) => (c > min ? c - 1 : c));
    };

    const handleIncrease = () => {
        if (disabled) return;
        setCount((c) => (c < max ? c + 1 : c));
    };

    return (
        <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={handleDecrease} disabled={disabled || count <= min}>-</button>
            <span className="mx-3 fs-5">{count}</span>
            <button className="btn btn-outline-secondary" onClick={handleIncrease} disabled={disabled || count >= max}>+</button>
            {onConfirm && (
                <button className="btn btn-primary ms-3" disabled={disabled} onClick={() => onConfirm(count)}>
                    Agregar
                </button>
            )}
        </div>
    );
};

export default ItemCount;