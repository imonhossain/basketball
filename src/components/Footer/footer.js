import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {CURRENT_YEAR} from '../../config';
const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="footer-logo">
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
            <span>&copy; Busketball {CURRENT_YEAR} All rights reserved</span>
        </div>
    )
}
export default Footer;