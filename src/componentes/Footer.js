import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './../estilos/footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div class="social">
                <div class="link">
                    <NavLink to='/ContactWithUs' >Contact with Us</NavLink>
                </div>
            </div>
            <div class="container">
                <Link href='#' class="facebook"><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link href='#' class="github"><FontAwesomeIcon icon={faGithub} /></Link>
                <Link href='#' class="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href='#' class="twitter"><FontAwesomeIcon icon={faTwitter} /></Link> 
            </div>
        </footer>
    );
}
 
export default Footer;