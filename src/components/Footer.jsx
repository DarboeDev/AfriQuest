import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter,} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
        <div className="logo-ssm">
            <div className="footer-logo">
            <h2>AfriQuest</h2>
            <p>Choose your dream destination.</p>
            </div>
            <div className="ssm">
                <FaFacebook className='footer-icon'/>
                <FaInstagram className='footer-icon'/>
                <FaTwitter className='footer-icon'/>
            </div>
        </div>
        <div className="footer-links">
            <div>
                <h3>Projects</h3>
                <a href="">Change Log</a>
                <a href="">Status</a>
                <a href="">License</a>
                <a href="">All Version</a>
            </div>
            <div>
                <h3>Community</h3>
                <a href="">GitHub</a>
                <a href="">Issues</a>
                <a href="">Project</a>
                <a href="">Twitter</a>
            </div>
            <div>
                <h3>Help</h3>
                <a href="">Support</a>
                <a href="">Troubleshooting</a>
                <a href="">Contact Us</a>
            </div>
            <div>
                <h3>Others</h3>
                <a href="">Terms of Service</a>
                <a href="">Privacy</a>
                <a href="">Licence</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer