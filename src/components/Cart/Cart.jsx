import { FaShoppingCart } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
    return (
        <div className="cart"> {/*saco el ícono del carrito de chat gpt*/}
            <FaShoppingCart size={32} />
            <span className="cart-number">
                1
            </span>
        </div>
    );
};

export default Cart;
