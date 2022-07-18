import '../assets/styles/navBar.scss';
import { NavLink } from "react-router-dom";

function NavBar(){
  const network = location.pathname.toLowerCase().split('/')[1];

  return (
    <nav className='NavBar'>
        <NavLink to={network} end>Inicio</NavLink>
        <NavLink to={network + '/productos'}>Productos</NavLink>
    </nav>
  )
}

export default NavBar;