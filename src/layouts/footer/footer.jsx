import React from 'react'
import '../../assets/styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="copy">
                    Hecho con ♥️ por <a href="https://tiendita.com">Tiendita</a>
                </div>
                <div className="socials">
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;