import React from "react";
import './LogIn.css'


function LogIn(){

    return (

    <div className="main">
                    <div className="log">Log In</div>

            <div className="container">

                <div className="login">
                    <form className="loginInput">
                        <input  type="text" placeholder="Email" name="uname" required/>
                        <input  type="password" placeholder="Password" name="psw" required/>
                    </form>
                </div>
            </div>
        <div className="loginFooter">
            <a href="www.google.com">Log In</a>
    </div>
    </div>

    )



}

export default LogIn