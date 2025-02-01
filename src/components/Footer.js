import React from 'react'
import '../styles/Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className='footer-content1'>
                    © MATCOM | NIMBUS 2025
                </div>
                <div className="footer-content3">
                    <div className="domains">
                        OUR DOMAINS
                    </div>
                    <ul className="domain-list">

                        <li>AI/ML</li>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>Blockchain</li>
                        <li>AR/VR</li>
                        <li>Finances</li>
                    </ul>
                </div>
                <div className='footer-content2'>
                    Designed by MATCOM 
                    <p><Link to="/dev-info">Dev Info</Link></p>
                </div>

            </div>



        </>
    )
}

export default Footer