import React, {useState}from 'react'
import Footer from '../NavPages/Footer'
import MainNavbar from '../NavPages/Navbar'
import InstructorApi from '../Api/Instructor'

const About = () => {
  const [instructor]= useState(InstructorApi)
  return (
<>
    <MainNavbar/>
    <section className='category'>
  <p class="section-subtitle">About Us</p>

  <h2 class="section-title">Explore more about IDEN</h2>

  <div className="container">
  <div class="row">
  <h1 className='about-title'>Why choose us?</h1>
  <div className="col-lg">
    <div className="about-content">
   
    <span></span>
    <p>In the competitive world of online business, it is imperative that one should hire the services of professionals rather doing the job on your own by essentially creating a captivating home page and fulfill the customer satisfaction towards the core level. You can find numerous web design companies in your area, but you need to be assured that you choose the best and most reliable one for your project among many. So, here we are available to entrust your needs as per your expectation.we are continually dedicated to meet your expectations and focused on being part of your business growth and success which is worth your investment in return.</p>
    </div>
  </div>
  <div class="col-lg">
    <div className="about-content-image">
    <img src="./images/4.webp" alt="" />
    </div>
  </div>

  </div>
    </div>

    </section>


    {/* team category starts */}
    <section className='category'>
  <p class="section-subtitle">Our Teams</p>

  <h2 class="section-title">Know our Experts</h2>

  <div className="container">
  <div class="row">
  <div class="col-sm-3 col-md-6 col-lg-4">
    <div className="director-image">
      <img src="./images/director.jpg" alt="" />
    </div>
    </div>
    <div class="col-sm-9 col-md-6 col-lg-8">
      <div className="director-saying">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid aperiam laboriosam accusamus possimus, culpa exercitationem, nostrum fugit non ratione itaque deleniti 
        expedita odio nulla molestias laborum quisquam provident! Doloremque, ipsum!</p>

        <div className="director-information">
          <h2>Manjeet Shah</h2>
          <p>CEO / Managing Director</p>
        </div>
    </div>
    </div>


  </div>
  </div>
  </section>

  <div className="container">
    <div className="about-horizontal-line">
    </div>
  </div>


  <div className="container">
    <div className="members">
      <div className="row">
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


      </div>
    </div>
  </div>

    {/* teams category ends */}
  

    <Footer/>
</>
  )
}

export default About