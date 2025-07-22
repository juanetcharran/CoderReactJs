import Product from '../models/Product';

const getProducts = async () => {
    try {
        const res = await fetch('./products.json');
        const data = await res.json();

        return data.map(product => new Product(product));
    } catch (error) {
        console.error("Error al cargar bebidas:", error);
    }
}

const getProductById = async (id) => {
    try {
        const products = await getProducts();

        return products.find(p => p.id == id);
    } catch (error) {
        console.error(`Error al buscar la bebida con id: ${id}`, error);
    }
}

export { getProducts, getProductById };