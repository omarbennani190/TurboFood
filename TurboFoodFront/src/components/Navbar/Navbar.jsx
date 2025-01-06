import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from './../../assets/frontend_assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setshowLogin}) => {

  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");// send user to login page with useNavigate
    
  }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="icon" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="icon" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setshowLogin(true)}>sign in</button> 
            : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              </div>}
            
        </div>
    </div>
  )
}

export default Navbar