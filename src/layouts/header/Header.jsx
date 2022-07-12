import React from 'react'
import NavBar from '../../components/NavBar'
import Logo from '../../components/Logo'
import '../../assets/styles/header.scss'

import '../../assets/styles/boxes.scss'
import '../../assets/styles/cart/shopping-cart.scss'
import IconBox from '../../components/IconBox'
import Input from '../../components/Input'

const Header = () => {



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
                                $0.00
                            </span>
                        </div>
                        <div className="cart-icon">
                            <i className='d-icon-bag'></i>
                            <span className='cart-count'>2</span>
                        </div>
                    </div>
                </div>

                
                <NavBar/>
            </div>
        </header>
    )
}

export default Header