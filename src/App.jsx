import './App.css'
import NavBar from './components/navbar.jsx'
import ItemListContainer from './components/itemlist.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const saludar = () => {
    alert("Te estoy saludando!");
  }

  const saludo = "Bienvenido!";

  return (
    <>
      <NavBar />
      <ItemListContainer saludar={saludar} saludo={saludo} />
    </>
  )
}

export default App
