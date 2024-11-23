import React, { useContext, useState } from 'react'; // Import React and hooks (useContext, useState)
import './Navbar.css'; // Import the CSS file for styling
import { assets } from './../../assets/frontend_assets/assets'; // Import assets such as icons and logos
import { Link } from 'react-router-dom'; // Import the Link component for navigation
import { StoreContext } from '../../context/StoreContext'; // Import the StoreContext to access global state

// Navbar component definition
const Navbar = ({ setshowLogin }) => {
  // State for managing the currently selected menu item
  const [menu, setMenu] = useState("Home");

  // Access the `getTotalCartAmount` function from StoreContext
  const { getTotalCartAmount } = useContext(StoreContext);

  // State for managing the visibility of the side navigation menu
  const [sideNavOpen, setSideNavOpen] = useState(false);

  // Function to toggle the side navigation menu's visibility
  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen); // Toggle between open and closed states
  };

  return (
    <nav className="navbar"> {/* Navbar container */}
      {/* Logo with a link to the home page */}
      <Link to='/'> 
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      {/* Hamburger menu button for mobile view */}
      <button className="navbar-hamburger" onClick={toggleSideNav}> 
        <span className="navbar-hamburger-icon"></span> {/* Three lines for the hamburger icon */}
        <span className="navbar-hamburger-icon"></span>
        <span className="navbar-hamburger-icon"></span>
      </button>

      {/* Desktop menu */}
      <ul className={`navbar-menu ${sideNavOpen ? 'side-nav-open' : ''}`}> {/* Add class if side nav is open */}
        {/* Link to Home page */}
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          Home
        </Link>
        {/* Scroll to Menu section */}
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
          Menu
        </a>
        {/* Scroll to Mobile App section */}
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>
          Mobile-app
        </a>
        {/* Scroll to Contact section */}
        <a href='#footer' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>
          Contact
        </a>
      </ul>

      {/* Navbar right section with search, basket, and sign-in */}
      <div className="navbar-right">
        {/* Search icon */}
        <img src={assets.search_icon} alt="icon" />
        {/* Basket icon with notification dot */}
        <div className="navbar-search-icon">
          <Link to={'/cart'}><img src={assets.basket_icon} alt="icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div> {/* Show a dot if the cart is not empty */}
        </div>
        {/* Sign In button */}
        <button onClick={() => {
          setSideNavOpen(false); // Close side navigation
          setshowLogin(true); // Open the login popup
        }}>Sign In</button>
      </div>

      {/* Side Navigation (visible only on mobile) */}
      <div className={`side-nav ${sideNavOpen ? 'open' : ''}`}> {/* Add class if side nav is open */}
        {/* Side navigation menu items */}
        <ul className="side-nav-menu">
          <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            Home
          </Link>
          <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
            Menu
          </a>
          <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>
            Mobile-app
          </a>
          <a href='#footer' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>
            Contact
          </a>
        </ul>
        {/* Sidebar content with search, basket, and sign-in */}
        <div className="sidebar-content">
          {/* Search icon */}
          <img src={assets.search_icon} alt="Search icon" />
          {/* Basket icon with notification dot */}
          <div className="navbar-search-icon">
            <Link to={'/cart'}><img src={assets.basket_icon} alt="Basket icon" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div> {/* Show a dot if the cart is not empty */}
          </div>
          {/* Sign In button */}
          <button onClick={() => {
            setSideNavOpen(false); // Close side navigation
            setshowLogin(true); // Open the login popup
          }}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
