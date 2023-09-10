import React, { Component } from "react";
import { render } from "react-dom";
import Cookie from 'react-cookie';
import CSRFToken from "./csrftoken";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return ( 
        <section className="login">
            <form method="POST" action="">
              <CSRFToken />
                <h1>Login</h1>
                <div className="container">
                    <label htmlFor="uname"><b>USERNAME OR EMAIL ADDRESS</b></label>
                    <input type="text" placeholder="Enter username or email" name="username" required/>
        
                    <label htmlFor="psw"><b>PASSWORD</b></label>
                    <input type="password" placeholder="Enter password" name="password" required/>
                    <label>
                        <input type="checkbox" name="remember"/> Remember Password
                    </label>
                    <button type="submit">LOGIN</button>
                </div>
                <div>
                    <p>Don't have an account? <a href="/signup/">Sign Up Now</a></p>
                </div>
            </form>
        </section>
    )
}
}

// const appDiv = document.getElementById("Loginform");
// render(<Login/> , appDiv);
