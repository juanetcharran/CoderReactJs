const ItemListContainer = ({ saludar, saludo }) => {
    return (
        <div onClick={() => saludar()}>
            <h1>{saludo}</h1>
        </div>
    )
}
export default ItemListContainer