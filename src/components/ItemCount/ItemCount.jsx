import React, { useState } from 'react';

const ItemCount = ({ initial = 1, min = 1, max = 99 }) => {
    const [count, setCount] = useState(initial);

    const handleDecrease = () => {
        if (count > min) setCount(count - 1);
    };

    const handleIncrease = () => {
        if (count < max) setCount(count + 1);
    };

    return (
        <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={handleDecrease}>-</button>
            <span className="mx-3 fs-5">{count}</span>
            <button className="btn btn-outline-secondary" onClick={handleIncrease}>+</button>
        </div>
    );
};

export default ItemCount;