import React from 'react';
import './assets/styles/base.scss';
import './assets/styles/fonts/riode.scss';
import Login from './components/Login';
import Header from './layouts/header/Header';
import Home from './layouts/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 
function App() {
  
  return (

    <BrowserRouter>
      <Header />

      <Routes>
          <Route path="/:network/"  element={<Home />} />
          <Route exact path="/:network/nosotros"  element={<h2>Nosotros</h2>}/>      
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
