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

    return (
        <header>
            <div className="container">
                <div className="top">
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

                    <IconBox className="call-us" textTop="Llamanos" textBottom="15-44443434" icon="d-icon-phone"/>

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