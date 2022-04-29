import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Brands  = () => {
  var settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  
  
  return(
   <>
   <section className='category'>
  
   <div  className="brand-title  color">
      <h1 className='section-title'>Collaborations and affilations</h1>
      </div>
     <div className="sub-container">
  
    {/* <div id='brands-bar' class="brand">
   
        <div class="container-fluid">
          <div class="brand-slider"> */}

          <div>
       
        <Slider {...settings}>
          <div>
          <img src="./images/brand-1.png" alt="" />
          </div>
          <div>
          <img src="./images/brand-2.png" alt="" />
          </div>
          <div>
          <img src="./images/brand-3.png" alt="" />
          </div>
          <div>
          <img src="./images/brand-4.png" alt="" />
          </div>
          <div>
          <img src="./images/brand-5.png" alt="" />
          </div>
          <div>
            <img src="./images/brand-5.png" alt="" />
          </div>
          
        </Slider>
      </div>
      </div>

      </section>
          
</>
  )
  
}

export default Brands