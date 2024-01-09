import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer=({phrase,link,address})=> {
    return (
        <div className="footer">
            {phrase}
            <Link to={address} className="footer-link">{link}</Link>
        </div>
    )
}
export default Footer;