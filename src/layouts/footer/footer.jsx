import '../../assets/styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState,useEffect } from 'react';
import axios from '../../api/Axios';


const Footer = () => {
    const [socials, setSocials ] = useState('')
    let network = location.pathname.toLowerCase().split('/')[1];

    useEffect(()=>{
        axios.get(`/home/socials`,
        {
            params: {
                'network': network
            }
        })
        .then(response => {
            setSocials(response.data)
        }).catch(e => {
            console.log(e);
        })
    },[]);

   

    return (
        <footer>
            <div className="container">
                <div className="copy">
                    Hecho con ♥️ por <a href="https://tiendita.com">Tiendita</a>
                </div>
                <div className="socials">
                    {
                        socials.facebook &&
                            <a href={socials.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    }
                    
                    {
                        socials.instagram &&
                            <a href={socials.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;