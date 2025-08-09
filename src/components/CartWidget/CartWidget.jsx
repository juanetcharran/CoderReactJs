import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Cart/cart.css';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { totalUnits } = useCart();
  return (
    <Link to="/cart" className="cart" aria-label="Carrito">
      <FaShoppingCart size={28} />
      {totalUnits > 0 && <span className="cart-number">{totalUnits}</span>}
    </Link>
  );
};

export default CartWidget;
