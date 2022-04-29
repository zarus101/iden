import React from 'react'
import MainNavbar from '../NavPages/Navbar'
import "../css/Logincss.css"
import Footer from '../NavPages/Footer'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
 <>
 <MainNavbar/>
 <div class="center">
      <h1>Create your account</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>FirstName</label>
        </div>
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>LastName</label>
        </div>
        <div class="txt_field">
          <input type="emial" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div>

        
        <Link to=""> <input type="submit" value="Register"/></Link>
       
      </form>
    </div>

    <Footer/>

 </>
  )
}

export default Registration