import '../assets/styles/navBar.scss';
import { Link } from "react-router-dom";

function NavBar(){
  const network = location.pathname.toLowerCase().split('/')[1];

  return (
    <nav className='NavBar'>
        <Link to={network}>Inicio</Link>
        <Link to={network + '/productos'}>Productos</Link>
    </nav>
  )
}

export default NavBar;