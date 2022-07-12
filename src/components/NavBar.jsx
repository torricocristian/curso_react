import '../assets/styles/navBar.scss';
import { Link, useParams } from "react-router-dom";

function NavBar(){


  return (
    <nav className='NavBar'>
        <Link to='/'>Inicio</Link>
        <Link to='/'>Nosotros</Link>
    </nav>
  )
}

export default NavBar;