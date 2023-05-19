import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username" ></input>
            <input type="password" placeholder="Password"></input>
        
            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">Or Login using</p>
                <div className="facebook-btn">Facebook</div>
                <div className="google-btn">Google</div>
            
           <div className={popupStyle}>
                <h3>Login Failed!</h3>
                <p>Username or Password incorrect</p>
           </div>
        </div>
    )
}
 
export default LoginForm