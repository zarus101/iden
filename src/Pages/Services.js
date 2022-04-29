import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesApi from '../Api/ServicesApi'
import Footer from '../NavPages/Footer'
import MainNavbar from '../NavPages/Navbar'

const Services = () => {
  const [servicecategory]= useState(ServicesApi)
  return (
    <>
    <MainNavbar/>
    <section className='category'>
  <p class="section-subtitle">Services</p>

  <h2 class="section-title">Explore Our Services</h2>

  <div className="container">
  <div class="course-grid">

{servicecategory.map((service, index)=>{
  return(
    <>
        <div class="course-card">
        <div class="course-content">
          <div class="course-banner">
            <img src={service.service_image} alt="course banner"/>
          </div>
          <br/>

            <h3 class="card-title">
              <h1>{}</h1>
            </h3>
            <p>{service.service_desc}</p>
            <br/>
            <br/>

            <Link to={'/singleservice/' + service.service_title}> <button className="button button-primary">
                <span ><b>Learn more</b></span> </button> </Link>
          </div>



          </div>
    </>
  )
})}


</div>
</div>


</section>
<br />
<br />
<br />
<br />
<br />


<section class="contact">

        <div class="contact-card" id="contact">
          <img src="./images/cta-bg-img.png" alt="shape" class="contact-card-bg"/>

          <h2>Start Your Best Classes With Us</h2>

          <Link to="/contact"><button class="btn btn-primary">
            <p class="btn-text">Contact Us</p>
            <span class="square"></span>
          </button> </Link>
        </div>

      </section>



  
    <Footer/>
    
    </>
  )
}

export default Services