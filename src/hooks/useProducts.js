import { useEffect, useState } from "react";
import { getProducts } from "../data/products";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return { products, loading };
}

export default useProducts;