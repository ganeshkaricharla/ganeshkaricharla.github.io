import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = ({ phrase, link, toad }) => {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toad} className="text">{link}</Link>
        </div>
    )
}
export default Footer;