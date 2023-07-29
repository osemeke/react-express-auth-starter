import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
// const dotenv = require('dotenv');
// process.env.PORT

const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('admin@oc.com');
    const [password, setPassword] = useState('admin12');

    const submit = async (e) => {
        e.preventDefault();

        console.log(password);
        axios.post('http://localhost:3001/auth/login', { username: email, password })
        .then(res => {
            console.log(res);
            // store
            // extract identity/role/permissions from token
            // check expiry and call refresh
            // call resource with token
            // navigate
            // check protected & authorized
            // crud
            window.localStorage.setItem('token', JSON.stringify(res.data.accessToken));
            window.localStorage.setItem('role', JSON.stringify(res.data.role));

            navigate("/dashboard")

        }).catch(err => console.log(err));        
    }

    return (
            <div className="az-signin-wrapper">
        <div className="az-card-signin">
          <h1 className="az-logo">az<span>i</span>a</h1>
          <div className="az-signin-header">
            <h2>Welcome back!</h2>
            <h4>Please sign in to continue</h4>
            <form onSubmit={ submit } action="">
              <div className="form-group">
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={ email } type="text" className="form-control" placeholder="Enter your email" defaultValue="demo@bootstrapdash.com" />
              </div>{/* form-group */}
              <div className="form-group">
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={ password } type="password" className="form-control" placeholder="Enter your password" defaultValue="thisisademo" />
              </div>{/* form-group */}
              <button className="btn btn-az-primary btn-block">Sign In</button>
            </form>
          </div>{/* az-signin-header */}
          <div className="az-signin-footer">
            <p><a href>Forgot password?</a></p>
            <p>Don't have an account? <NavLink to="/sign-up">Create an Account</NavLink></p>
          </div>{/* az-signin-footer */}
        </div>{/* az-card-signin */}
      </div>
    )
}

export default Signin;