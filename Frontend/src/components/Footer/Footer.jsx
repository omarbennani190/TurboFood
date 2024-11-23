import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS for additional styling
import { assets } from './../../assets/frontend_assets/assets';
import { menu_list } from './../../assets/frontend_assets/assets';
import { Phone, Mail, MapPin } from 'lucide-react'; // Import Lucide icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-3 mb-4" id='footer'>
            <img src={assets.logo} alt="logo" width="120" className="mb-3" />
            <p>
            At TurboFood, we are committed to providing fast, delicious, and high-quality meals to satisfy your cravings. Whether you're looking for a quick snack or a full meal, we bring the best food directly to your door with the convenience and speed you deserve. Join the TurboFood family today for a seamless and tasty experience!            </p>
            <div className="d-flex gap-3 social-icons">
              <img src={assets.facebook_icon} alt="Facebook" width="40" />
              <img src={assets.twitter_icon} alt="Twitter" width="40" />
              <img src={assets.instagram_icon} alt="Instagram" width="40" />
              <img src={assets.linkedin_icon} alt="LinkedIn" width="40" />
            </div>
          </div>

          {/* Menu List */}
          <div className="col-md-3 mb-4">
            <h5>Our Menus</h5>
            <ul className="list-unstyled">
              {menu_list.map((item, index) => (
                <li key={index}>{item.menu_name}</li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Recruitment</li>
              <li>Our Chefs</li>
              <li>Testimonials</li>
              <li>Blogs</li>
              <li>Maps</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p><Phone size={16} className="me-2" /> +212 6 11 44 33 98</p>
            <p><Mail size={16} className="me-2"/> info@yourdomain.com</p>
            <p><MapPin size={16} className="me-2"/> 123 El Qods Street, Oujda</p>
            <h5>Download App</h5>
            <img src={assets.play_store} alt="Google Play" width="120" />
            <img src={assets.app_store} alt="App Store" width="120" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-4">
          {/* Left Section */}
          <div className="footer-left">
            <p>&copy; 2024Y All rights reserved by <strong>Food Zone</strong></p>
          </div>

          {/* Right Section - Accept For */}
          <div className="footer-right">
            <span>Accept For:</span>
            <div className="payment-icons d-flex gap-3">
              <img src={assets.paypal_icon} alt="PayPal" width="120"height="47px" />
              <img src={assets.visa_icon} alt="Visa" width="120"height="47px" />
              <img src={assets.mastercard_icon} alt="MasterCard" width="120" height="47px" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
