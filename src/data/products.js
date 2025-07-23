import Product from '../models/Product';

const getProducts = async () => {
    try {
        const res = await fetch('/products.json');
        const data = await res.json();

        await new Promise(resolve => setTimeout(resolve, 2000));

        return data.map(product => new Product(product));
    } catch (error) {
        console.error("Error al cargar bebidas:", error);
    }
}

const getProductById = async (id) => {
    try {
        const products = await getProducts();

        return products.find(product => product.id == id);
    } catch (error) {
        console.error(`Error al buscar la bebida con id: ${id}`, error);
    }
}

const getProductsByCategory = async (id) => {
    try {
        const products = await getProducts();

        return products.filter(product => product.categoria == id || !id);
    } catch (error) {
        console.error(`Error al buscar la bebida con id: ${id}`, error);
    }
}

export { getProductById, getProductsByCategory };