import React from 'react';
import 'animate.css'; // Import animate.css
import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <div className="container">
        <div className="header-contents animate__animated animate__fadeIn">
          <h2 className="animate__animated animate__fadeInDown">Order your favorite food here</h2>
          <p className="animate__animated animate__fadeInUp">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </p>
          <button className="animate__animated animate__fadeInUp">View Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
