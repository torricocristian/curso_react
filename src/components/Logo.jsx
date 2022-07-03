import '../assets/styles/logo.scss';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  )
}

export default Logo