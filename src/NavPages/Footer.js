import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <footer>

<div class="footer-grid">

  <div class="grid-item">

    <div class="footer-logo">
      {/* <img src="./images/logo-footer.png" alt="educator logo white"/> */}

      <h1 >IDEN</h1>
    </div>

    <p class="footer-text">
      Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu eget, blandit ultricies risus. Vivamus
      fringilla urna
      vel risus congue accumsan.
    </p>

    {/* <div class="social-link">
      <Link to="#">
        <ion-icon name="logo-facebook"></ion-icon>
      </Link>
      <Link to="#">
        <ion-icon name="logo-instagram"></ion-icon>
      </Link>
      <Link to="#">
        <ion-icon name="logo-twitter"></ion-icon>
      </Link>
      <Link to="#">
        <ion-icon name="logo-youtube"></ion-icon>
      </Link>
    </div> */}

  </div>

  <ul class="grid-item">

    <h4 class="item-heading">Our Link</h4>

    <li class="list-item">
      <Link to="/">Home</Link>
    </li>

    <li class="list-item">
      <Link to="/about">About Us</Link>
    </li>

    <li class="list-item">
      <Link to="/course">Courses</Link>
    </li>

    <li class="list-item">
      <Link to="/blog">Blog</Link>
    </li>

    <li class="list-item">
      <Link to="/contact">Contact Us</Link>
    </li>

  </ul>

  <ul class="grid-item">

    <h4 class="item-heading">Other Link</h4>

    <li class="list-item">
      <Link to="#">Instructor</Link>
    </li>

    <li class="list-item">
      <Link to="#">FAQ</Link>
    </li>

    <li class="list-item">
      <Link to="#">Event</Link>
    </li>

    <li class="list-item">
      <Link to="#">Privacy Policy</Link>
    </li>

    <li class="list-item">
      <Link to="#">Term & Condition</Link>
    </li>

  </ul>

  <div class="grid-item">

    <h4 class="item-heading">Subscribe Now</h4>

    <div class="wrapper">
      <input type="text" name="subscribe" placeholder="Email Address"/>
      
      <button class="send-btn">
        <h3>send</h3>
      </button>
    </div>

  </div>

</div>

<p class="copyright">
  Copyright © 2022 <Link to="#">suraj</Link>. All rights reserved.
</p>

</footer>

   </>
  )
}

export default Footer