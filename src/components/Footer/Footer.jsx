import React from 'react'
import './Footer.css'
import { assets } from './../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>Société</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>Contactez-nous</h2>
              <ul>
                <li>+212-532448810</li>
                <li>contact@turbofood.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Turbofood.com - Tous droit réserver</p>
    </div>
  )
}

export default Footer