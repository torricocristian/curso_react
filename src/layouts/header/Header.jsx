import NavBar from '../../components/NavBar'
import Logo from '../../components/Logo'
import IconBox from '../../components/IconBox'
import Input from '../../components/Input'
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import '../../assets/styles/header.scss'
import '../../assets/styles/boxes.scss'
import '../../assets/styles/cart/shopping-cart.scss'

const Header = () => {

    const { itemCount, total } = useCart();
    let network = location.pathname.toLowerCase().split('/')[1];

    //[MENU] Funcionalidad para mostrar y ocultar el menú, al hacer click en el icono
    const showMenu = () => {
        let header = document.querySelector('header');
        header.classList.toggle('open-menu');
    }

    return (
        <header>
            <div className="container">
                <div className="top">

                    <div className="menu-mobile" onClick={showMenu}>
                        <span className="menu-mobile__item"></span>
                        <span className="menu-mobile__item"></span>
                        <span className="menu-mobile__item"></span>
                    </div>

                    <Logo />
                    <div className="search">
                        <Input 
                            data={
                                {
                                    className: 'search',
                                    attr: {
                                        'placeholder': 'Buscar',
                                    }
                                }
                            }
                        />
                    </div>

                    <a href="https://wa.me/541144444444" target="_blank">
                        <IconBox className="call-us" textTop="Hablemos" textBottom="15-44443434" icon="whatsapp" component="fontawesome"/>
                    </a>
                    
                    <div className="shopping-cart">
                        <div className="data">
                            <span className="cart-name">
                                Mi Carrito
                            </span>
                            <span className="cart-price">
                                ${total}
                            </span>
                        </div>
                        <Link to={'/' + network + '/cart/'} className="cart-icon">
                            <i className='d-icon-bag'></i>
                            {
                                itemCount > 0 && <span className='cart-count'>{itemCount}</span>
                            }
                        </Link>
                    </div>
                </div>

                
                <NavBar/>
            </div>
        </header>
    )
}

export default Header