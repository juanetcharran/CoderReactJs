import { useEffect, useState } from "react";
import { getProductsByCategory } from "../data/products";

const useProductsByCategory = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductsByCategory(category)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error loading products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category])

    return { products, loading };
}

export default useProductsByCategory;