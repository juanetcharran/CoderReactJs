import React from 'react'
import Loading from '../Loading/Loading.jsx'
import { useParams } from 'react-router-dom';
import useProductsByCategory from '../../hooks/useProductsByCategory.js';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = () => {
    const { id } = useParams();
    const { products, loading} = useProductsByCategory(id);

    if (loading) return (
        <Loading />
    );

    return (
        <div className="container my-4">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <ItemList product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer