class Product {
    constructor({ id, nombre, precio, imagen, categoria, stock = 99 }) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.stock = stock;
    }
}

export default Product;