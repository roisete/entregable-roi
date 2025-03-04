import React from'react';
import { NavLink, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './tiendaReducer';
import Blog from './Blog';
import Carrito from './Carrito';
import Inicio from './Inicio';
import Tienda from './Tienda';
import Error404 from './Error404';

//https://github.com/roisete/entregable-roi
function App() {
  return (
    <Provider store={createStore(reducer)}>
      <div id="contenedor">
          <div id="menu">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/tienda">Tienda</NavLink>
          </div>
          <main>
            <Routes>
              <Route path="*" element={<Error404/>} />
              <Route path="/" element={<Inicio/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/tienda" element={<Tienda/>}/>
            </Routes>
          </main>
        <aside>
            <Carrito/>
          </aside> 
      </div>
    </Provider>
  );
}

export default App;
