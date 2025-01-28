import React from 'react'
import '../styles/Footer.css'

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

                        <li>Web Development</li>
                        <li>AI/ML</li>
                        <li>Blockchain</li>
                        <li>AR/VR</li>
                        <li>Finances</li>
                    </ul>
                </div>
                <div className='footer-content2'>
                    Designed by MATCOM
                </div>

            </div>



        </>
    )
}

export default Footer