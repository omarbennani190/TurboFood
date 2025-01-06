import React, { useContext, useState } from 'react'
import axios from 'axios'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const LoginPopup = ({setshowLogin}) => {
    // fetch url using context api
    const {url,setToken} = useContext(StoreContext)
    const [currState, setcurrState] = useState("Login")
    const [data,setData] = useState({ // save user name email password
        name:"",
        email:"",
        password:""
    }) 

    // take data from input field and save it in setData and link with input in this form (login-popup-inputs)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{
    //     console.log(data);        
    // },[data]) // whenever data is updated the arrow function will be executed

    const onLogin = async (event) => {  //linked with <form> tag
        event.preventDefault()
        // api call
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            // token from storeContext file
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setshowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}                
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span> </p>            
            }
        </form>
    </div>
  )
}

export default LoginPopup