import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer container-fluid' >
            <div>
            <h3>Thanks for visiting our Website</h3>
            <h5>Adventure Dairy</h5>
            <p>@2022 all right reserved</p>
            </div>
            <div>
                <h5>follow us on</h5>
                <p>FaceBook<br/>Instagram<br/>Twitter</p>
                
            </div>
        </div>
    );
};

export default Footer;