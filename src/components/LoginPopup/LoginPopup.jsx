import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("Login");
    return (
        <div className="login-popup">
            <div className="login-popup-container shadow-lg p-4 rounded">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>{currState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" style={{ cursor: 'pointer' }} />
                </div>
                <form>
                    <div className="login-popup-inputs mb-4">
                        {currState === "Login" ? (
                            <>
                                <input type="email" className="form-control" placeholder="Your email" required />
                                <input type="password" className="form-control" placeholder="Password" required />
                            </>
                        ) : (
                            <>
                                <input type="text" className="form-control" placeholder="Your name" required />
                                <input type="email" className="form-control" placeholder="Your email" required />
                                <input type="password" className="form-control" placeholder="Password" required />
                            </>
                        )}
                    </div>
                    <button className="btn btn-orange w-100">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                    <div className="login-popup-condition d-flex align-items-center mt-3">
                        <input type="checkbox" required />
                        <p className="mb-0 ms-2">By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState === "Login"
                        ? <p>Don't have an account? <span onClick={() => setcurrState("Sign Up")} style={{ color: 'orange', cursor: 'pointer' }}>Sign Up here</span></p>
                        : <p>Already have an account? <span onClick={() => setcurrState("Login")} style={{ color: 'orange', cursor: 'pointer' }}>Login here</span></p>}
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
