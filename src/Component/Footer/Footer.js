import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' >
            <h1>Thanks for visiting our Website</h1>
            <div>
                <h5>follow uo on</h5>
                <p>FaceBook<br/>Instagram<br/>Twitter</p>
            </div>
        </div>
    );
};

export default Footer;