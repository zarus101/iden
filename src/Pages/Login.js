import React from 'react'
import MainNavbar from '../NavPages/Navbar'
import "../css/Logincss.css"
import Footer from '../NavPages/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
 <>
 <MainNavbar/>
 <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <Link to="/userpage"> <input type="submit" value="Login"/></Link>
        <div class="signup_link">
          Not a member? <Link to='/registration'> <a>Signup</a> </Link>
        </div>
      </form>
    </div>

    <Footer/>

 </>
  )
}

export default Login