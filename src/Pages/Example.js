import React from 'react'
import { useState } from 'react'
import "../css/example.css"

const Example = () => {
    const [number, setNumber]= useState(0);



  return (
    <>
    <section className='example-section'>
    <h1>counter increase</h1>
    <p className='text text-center  bold'>{number}</p>

    <button className='btn btn-primary mx-4' onClick={()=>{setNumber(number + 1)}}>Increase</button>
    <button className='btn btn-danger' onClick={()=>{setNumber(number-1)}}>decrease</button>
    </section>


    </>
  )
    
}

export default Example