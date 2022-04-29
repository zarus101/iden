import React, { useState } from 'react'
import Footer from '../NavPages/Footer'

import CoursesCategoryApi from '../Api/CoursesCategoryApi'
import ServicesApi from '../Api/ServicesApi'
import InstructorApi from '../Api/Instructor'
import { Link } from 'react-router-dom'
import { Typewriter, } from 'react-simple-typewriter'
import "react-simple-typewriter/dist/index"
import Brands from './Brands'
import CourseCard from './CourseCard'

import MainNavbar from '../NavPages/Navbar'





const HomePage = () => {
  
  const [coursecategory, setCourseCategory]= useState(CoursesCategoryApi)
  const [servicecategory]= useState(ServicesApi)
  const [instructor]= useState(InstructorApi)
  

    const FilterItems=(category)=>{
      const updatedItems=CoursesCategoryApi.filter((curElem)=>{
        return curElem.category=== category;

      })
      setCourseCategory(updatedItems);
    }



  return (
  <>

  <div className="conatiner">
   
  <MainNavbar/>
 
  <main>
   


  <div class="animation-area">
		<ul class="box-area">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
    <div className="home-main">
  <p class="section-subtitle">Welcome To IDEN CENTRE FOR THE ONLINE LEARNING</p>


<h1 class="main-heading">
  Get Class From Our Best
  <span  className='auto-type'>
    <Typewriter
    loop
    cursorStyle='/'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    words={["developer","instructor","experts"]}
    />

     {/* <img src="./images/banner-line.png" alt="line"/> */}
  </span>
</h1>


<p class="section-text">
  Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.
</p>

<div class="home-btn-group">
<Link to="/course"><button class="button btn-third">
    <p class="btn-text">Explore Courses</p>

  </button></Link>


  <Link to="/contact"><button class="button btn-third">
    <p class="btn-text">Contact Us</p>
    
  </button></Link>
</div>
</div>
	</div>



  {/* main-course category starts */}
  <section className='category'>
  <p class="section-subtitle">Course Category</p>

  <h2 class="section-title">Explore Popular Courses</h2>

  <div className="container">
  <nav className='course-nav'>
      <div className="btn-group">
        <button className='btn-group__item active'  onClick={()=>{FilterItems("web-development")}}>Web-Development</button>
        <button className='btn-group__item' onClick={()=>{FilterItems("mobile-development")}}>Mobile-Development</button>
        <button className='btn-group__item ' onClick={()=>{FilterItems("digital-marketing")}}>Digital-Marketing</button>

    
      </div>

    </nav>



  
  </div>

  <div className="container">
    <div className="row justify-content-center">
      
  <CourseCard coursecategory={coursecategory}/>


    </div>
    
  </div>

  </section>


 




 
 {/* <!--
        - #COURSE SECTION
      --> */}

      <section class="category" >

        <p class="section-subtitle"></p>

        <h2 class="section-title">Our Other Services</h2>

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
                        <h1>{service.service_title}</h1>
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

       
      </section>



      {/* <!--
        - #INSTRUCTOR SECTION
      --> */}

      <section class="instructor">

        <p class="section-subtitle">Best Coach</p>

        <h2 class="section-title">Our Expert Instructor</h2>

        <div class="instructor-grid">

          {instructor.map((instructor , index)=>{
            return(
              <>
              <div class="instructor-card">

                      <div class="instructor-img-box">
                        <img src={instructor.image} alt="instructor louis sullivan"/>

                        <div class="social-link">
                          <a href="#" class="facebook">
                            <ion-icon name="logo-facebook"></ion-icon>
                          </a>

                          <a href="#" class="instagram">
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>

                          <a href="#" class="twitter">
                            <ion-icon name="logo-twitter"></ion-icon>
                          </a>
                        </div>
                      </div>

                      <h4 class="instructor-name">{instructor.name}</h4>

                      <p class="instructor-title">{instructor.title}</p>

                      </div>
              </>
            )
          })}

          
        </div>

      </section>




      {/* <!--
        - #TESTIMONIALS
      --> */}

      <section class="testimonials">

        <div class="testimonials-left">

          <p class="section-subtitle">Testimonial</p>

          <h2 class="section-title">What Our Client Says About Us</h2>

          <p class="section-text">
            Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat vehicula sem, et imperdiet enim
            tempor id.
            Phasellus lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor ligula ullamcorper
            venenatis.
          </p>

        </div>

        <div class="testimonials-right">

          <div class="testimonials-card">
            <img src="./images/quote.png" alt="quote icon" class="quote-img"/>

            <p class="testimonials-text">
              "Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum.
              Nunc sagittis
              sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat
              tortor ut nisl
              finibus".
            </p>

            <div class="testimonials-client">

              <div class="client-img-box">
                {/* <img src=".//images/client.jpg" alt="client christine rose"/> */}
              </div>

              <div class="client-detail">
                <h4 class="client-name">Yalam Sir</h4>

                <p class="client-title">Client</p>
              </div>

            </div>
          </div>

        </div>

      </section>


      <br/>
      <br/>
      <br/>
      <Brands/>
    


      {/* <!--
        - #CONTACT
      --> */}

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







  </main>
  
  <Footer/>
  </div>
  </>
  )
}

export default HomePage