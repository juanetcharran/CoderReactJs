import './App.css'
import NavBar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import CartPage from './components/Cart/Cart.jsx';
import CheckoutForm from './components/CheckoutForm/CheckoutForm.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categorias/:id" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<div className="container my-4"><CheckoutForm /></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
