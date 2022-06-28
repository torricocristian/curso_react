import React from 'react';
import '../styles/navBar.scss';
import { Logo } from './Logo';

function NavBar(){
  return (
    <>
        <Logo/>

        <nav className='NavBar'>
            <a href="/">Inicio</a>
            <a href="/">Productos</a>
            <a href="/">Nosotros</a>
            <a href="/">Contacto</a>
        </nav>
        
    </>
  )
}

export default NavBar;