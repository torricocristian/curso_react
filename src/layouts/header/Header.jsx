import NavBar from '../../components/NavBar'
import Logo from '../../components/Logo'
import IconBox from '../../components/IconBox'
import Input from '../../components/Input'
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import '../../assets/styles/header.scss'
import '../../assets/styles/boxes.scss'
import '../../assets/styles/cart/shopping-cart.scss'
import { useState,useEffect } from 'react';
import axios from '../../api/Axios';

const Header = () => {

    const { itemCount, total } = useCart();
    let network = location.pathname.toLowerCase().split('/')[1];
    const [whatsapp, setWhatsapp ] = useState('')


    //[MENU] Funcionalidad para mostrar y ocultar el menú, al hacer click en el icono
    const showMenu = () => {
        let header = document.querySelector('header');
        header.classList.toggle('open-menu');
    }

    useEffect(()=>{
        axios.get(`/home/socials`,
        {
            params: {
                'network': network
            }
        })
        .then(response => {
            setWhatsapp(response.data.whatsapp)
        }).catch(e => {
            console.log(e);
        })
    },[]);

   

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

                    {
                    /*
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
                    */
                    }
                    
                    {
                      whatsapp && 
                        <a href={'https://wa.me/5411' + whatsapp} target="_blank">
                            <IconBox className="call-us" textTop="Hablemos" textBottom={'15-'+ whatsapp} icon="whatsapp" component="fontawesome"/>
                        </a>
                    }
                    
                    
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