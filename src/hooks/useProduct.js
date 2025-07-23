import { useEffect, useState } from "react";
import { getProductById } from "../data/products";

const useProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    return { product, loading };
}

export default useProduct;