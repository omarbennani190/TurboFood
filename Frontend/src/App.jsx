import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  // State to toggle the visibility of the LoginPopup component
  const [showLogin,setshowLogin] = useState(false)
  return (
    <>
    
    {/* Conditionally render the LoginPopup component */}
      {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      {/*If showLogin is true, the LoginPopup component is rendered and passed the setshowLogin function as a prop.
      If showLogin is false, it renders an empty fragment (<></>), which means nothing will be displayed. 
      This empty fragment is a way to handle a conditional rendering in JSX.*/}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App