import { useEffect, useState } from "react";
import { getProductsByCategoryFs } from "../services/products";

const useProductsByCategory = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    getProductsByCategoryFs(category)
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