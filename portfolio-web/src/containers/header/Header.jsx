import React from 'react'
import "./header.css"
import mcgill from "../../assets/mtl.png"

const Header = () => {
  return (
    <div className='port__header section__padding id="home'>
      <div className='port__header-content'>
        
        <h1 className='gradient__text name'>
          Corey Zhao.
        </h1>
        <h1 className='gradient__text comp_sci'>
          McGill 26' + Comp. Sci. 
        </h1>
        <p>I'm an undergraduate of McGill's Class of 2026 and my passion is Computer Science.
My interests include software design, mathematics and web development.</p>

        <div className='port__header-content-input'>
          <a href='mailto:coreyzh2004@gmail.com' target='blank'><p className='links'>&nbsp;&nbsp;&nbsp;Email: &nbsp;coreyzh2004@gmail.com</p></a>
          <a href='https://www.linkedin.com/in/coreyzhao/' target='blank'><p className='links'>LinkedIn: &nbsp;https://www.linkedin.com/in/coreyzhao/</p></a>
          <a href='https://github.com/coreyzhao' target='blank'><p className='links'>&nbsp;&nbsp;Github: &nbsp;https://github.com/coreyzhao</p></a>
          {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CV: &nbsp;click here for CV pdf</p> */}
        </div>

     
       
      </div>
      <div className='port__header-image'>
          <img src={mcgill} alt="mcgill" />
          <p>Montreal, Canada</p>
      </div>
    </div>
  )
}

export default Header
