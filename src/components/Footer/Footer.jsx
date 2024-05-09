import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="footer-logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia neque reprehenderit eveniet quos dolorum quidem porro minus praesentium dolorem?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook_icon" />
                    <img src={assets.twitter_icon} alt="twitter_icon" />
                    <img src={assets.linkedin_icon} alt="linkedin_icon" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-123-123-123</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyrights">
            Copyright 2024 © Tomato.com  - All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer