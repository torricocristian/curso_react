import React from 'react';
import './assets/styles/base.scss';
import './assets/styles/fonts/riode.scss';
import Login from './components/Login';
import Header from './layouts/header/Header';
import Home from './layouts/home/Home';
 
function App() {
  return (
    <>
      <Header />
      <Home />

      {/* <Login /> */}
    </>
  );
}

export default App;
