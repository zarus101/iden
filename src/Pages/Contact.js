
import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../NavPages/Footer'
import MainNavbar from '../NavPages/Navbar'






const Contact = () => {
  return (
    <>
    <MainNavbar/>
    <section className='category'>
  <p className="section-subtitle">Contact Us</p>

  <h2 className="section-title">Explore Popular Courses</h2>

      <div className="container">
      <div class="sub-center">
      <h1>Message Us</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Name</label>
        </div>
        <div class="txt_field">
          <input type="email" required/>
          <span></span>
          <label>email</label>
        </div>
        
          <textarea type="message" label="message" required/>

         
      
        
        <Link to=""> <input type="submit" value="submit"/></Link>
        
      </form>
    </div>

     
      </div>
  </section>
   
    
      <Footer/>
    </>
  )
}

export default Contact



