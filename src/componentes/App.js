import React from'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Blog from './componentes/Blog';
import Carrito from './componentes/Carrito';
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import Tienda from './componentes/Tienda';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
