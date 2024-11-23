import React, { useState } from 'react'; 
import './LoginPopup.css'; 
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react'; 

// Component definition
const LoginPopup = ({ setshowLogin }) => {
    // State variables
    const [currState, setcurrState] = useState("Login"); // Tracks whether the popup is in "Login" or "Sign Up" mode
    const [email, setEmail] = useState(""); // Stores the email input value
    const [password, setPassword] = useState(""); // Stores the password input value
    const [name, setName] = useState(""); // Stores the name input value for "Sign Up"
    const [termsAccepted, setTermsAccepted] = useState(false); // Tracks whether the terms and conditions checkbox is checked

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        if (currState === "Login") {
            console.log("Logging in with:", email, password); // Log login details
        } else {
            console.log("Signing up with:", name, email, password); // Log sign-up details
        }
    };

    return (
        <div className="login-popup">
            {/* Main popup container */}
            <div 
                className="login-popup-container shadow-lg" 
                style={{
                    backgroundColor: 'white',
                    color: 'black'  
                }}
            >
                {/* Header section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold">{currState}</h2> {/* Dynamic title */}
                        <p className="text-sm opacity-90">
                            {currState === "Login" ? "Welcome to TurboFood" : "Join Turbo Food today"} {/* Dynamic subtitle */}
                        </p>
                    </div>
                    <button 
                        onClick={() => setshowLogin(false)} // Closes the popup
                        className="x-button"
                    >
                        <X size={20} /> {/* Close button icon */}
                    </button>
                </div>

                {/* Form section */}
                <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    <div className="login-popup-inputs mb-4 space-y-4">
                        {currState === "Login" ? ( // Conditionally render inputs based on current state
                            <>
                                {/* Email input for Login */}
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" size={18} />
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update email state
                                        className="form-control pl-10 bg-white border border-gray-300 text-black placeholder-gray-500" 
                                        placeholder="Your email" 
                                        required 
                                    />
                                </div>
                                {/* Password input for Login */}
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" size={18} />
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
                                        className="form-control pl-10 bg-white border border-gray-300 text-black placeholder-gray-500" 
                                        placeholder="Password" 
                                        required 
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Name input for Sign Up */}
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" size={18} />
                                    <input 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} // Update name state
                                        className="form-control pl-10 bg-white border border-gray-300 text-black placeholder-gray-500" 
                                        placeholder="Your name" 
                                        required 
                                    />
                                </div>
                                {/* Email input for Sign Up */}
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" size={18} />
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update email state
                                        className="form-control pl-10 bg-white border border-gray-300 text-black placeholder-gray-500" 
                                        placeholder="Your email" 
                                        required 
                                    />
                                </div>
                                {/* Password input for Sign Up */}
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" size={18} />
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
                                        className="form-control pl-10 bg-white border border-gray-300 text-black placeholder-gray-500" 
                                        placeholder="Password" 
                                        required 
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn-orange w-100 d-flex align-items-center justify-content-center gap-2">
                        <span>{currState === "Sign Up" ? "Create Account" : "Login"}</span>
                        <ArrowRight size={18} />
                    </button>

                    {/* Terms and conditions checkbox */}
                    <div className="login-popup-condition d-flex align-items-center mt-3 text-sm">
                        <input 
                            type="checkbox" 
                            checked={termsAccepted} 
                            onChange={(e) => setTermsAccepted(e.target.checked)} // Update termsAccepted state
                            className="form-check-input orange-checkbox" 
                            required 
                        />
                        <p className="mb-0 ms-2 text-black/90">
                            By continuing, I agree to the terms of use & privacy policy.
                        </p>
                    </div>

                    {/* Toggle between Login and Sign Up */}
                    <div className="mt-4 text-center text-sm">
                        {currState === "Login" ? (
                            <p className="text-black/90">
                                Don't have an account? {' '}
                                <span 
                                    onClick={() => setcurrState("Sign Up")} // Switch to Sign Up
                                    className="text-orange-400 hover:text-orange-300 cursor-pointer font-semibold"
                                >
                                    Sign Up here
                                </span>
                            </p>
                        ) : (
                            <p className="text-black">
                                Already have an account? {' '}
                                <span 
                                    onClick={() => setcurrState("Login")} // Switch to Login
                                    className="text-orange-400 hover:text-orange-300 cursor-pointer font-semibold"
                                >
                                    Login here
                                </span>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup; 
