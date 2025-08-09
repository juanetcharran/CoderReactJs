import { useEffect, useState } from "react";
import { getProductByIdFs } from "../services/products";

const useProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getProductByIdFs(id)
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