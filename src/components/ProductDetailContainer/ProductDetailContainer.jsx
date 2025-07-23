import React from 'react'
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import Loading from '../Loading/Loading.jsx';

const ProductDetailContainer = () => {
    const { id } = useParams();
    const { product, loading } = useProduct(id);

    return (
        <div>
            {
                loading ? <Loading /> : <ItemDetail product={product} />
            }
        </div>
    )
}

export default ProductDetailContainer;