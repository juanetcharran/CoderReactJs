import './App.css'
import NavBar from './components/Navbar/navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:id" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
