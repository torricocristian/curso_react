import React from 'react';
import './assets/styles/base.scss';
import './assets/styles/fonts/riode.scss';
import Login from './components/Login';
import Header from './layouts/header/Header';
import Home from './layouts/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PageListProduct from './layouts/product/PageListProduct';
import PageDetailProduct from './layouts/product/PageDetailProduct';
 
function App() {
  
  return (

    <BrowserRouter>
      <Header />

      <Routes>
          <Route path="/"  element={<h2>Esto es la Home general</h2>} />
          <Route path="/:network/"  element={<Home />} />
          <Route exact path="/:network/nosotros"  element={<h2>Nosotros</h2>}/>  
          <Route exact path="/:network/productos"  element={<PageListProduct/>}/>  
          <Route exact path="/:network/productos/:slugProduct"  element={<PageDetailProduct />}/>      
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
