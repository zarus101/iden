import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../NavPages/Footer'
import MainNavbar from '../NavPages/Navbar'

const Protected = (props) => {

    const {Homepage}= props
  return (
    <>
    <Homepage/>
    </>
  )
}

export default Protected