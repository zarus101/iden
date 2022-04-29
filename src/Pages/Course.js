import React, { useState } from 'react'
import CoursesCategoryApi from '../Api/CoursesCategoryApi'
import Footer from '../NavPages/Footer'
import MainNavbar from '../NavPages/Navbar'
import CourseCard from './CourseCard'

const Course = () => {
  const [coursecategory, setCourseCategory]= useState(CoursesCategoryApi)

  const FilterItems=(category)=>{
    const updatedItems=CoursesCategoryApi.filter((curElem)=>{
      return curElem.category=== category;

    })
    setCourseCategory(updatedItems);
  }
  return (
   <>
   <MainNavbar/>
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



   <Footer/>
   </>
  )
}

export default Course