import React from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../NavPages/Footer'
import MainNavbar from "../NavPages/Navbar"

const SingleService = ({servicecategory}) => {
 const {title}= useParams();

 


   


  return (
   <>
   <MainNavbar/>
   <section className='category'>
  <p class="section-subtitle"></p>

  <h2 class="section-title">Explore Popular Courses</h2>

  <div className="container">
  {servicecategory.filter(curElem => curElem.service_title===title).map((curElem, id)=>{
          return(
              <>
            <div className="row">
            
                    <div className="col-lg">
                        <div className="single-card-image">
                        <img src={curElem.image} alt="image" />

                        </div>
                    </div>
                
                    <div className="col-lg">
                        <div className="single-card-des">
                            <h1>{curElem.service_title}</h1>
                            <p>{curElem.service_desc}</p>
                         

                        </div>
                    </div>     
            </div> 
         </>
          )
         
      })}

  </div>
  </section>

   <Footer/>


   </>
  )
}

export default SingleService
