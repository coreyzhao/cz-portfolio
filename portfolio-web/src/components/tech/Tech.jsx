import React from 'react'
import "./tech.css"
import {python, java, html, react, c, mysql, azure, mongodb, express, nodejs } from "./imports"

const Tech = () => {
  return (
    
    <div className='port__tech section__margin' id='tech'>
      <div className='port__tech-title'>
        <h1>Skills and Technologies</h1>
      </div>
      <div className='port__tech-container'>
        <div>
          <img src={python} alt="python" />
          <p>Python</p>
        </div>
        <div>
          <img src={java} alt="java" />
          <p>Java</p>
        </div>
        <div className='mongodb'>
          <img src={mongodb} alt="mongodb" />
          <p>MongoDB</p>
        </div>

        <div className='express'>
          <img src={express} alt="express" />
          <p>express.js</p>
        </div>
        <div className='nodejs'>
          <img src={nodejs} alt="nodejs" />
          <p>node.js</p>
        </div>

        <div className='html'>
          <img src={html} alt="html" />
          <p>HTML/CSS/JavaScript</p>
        </div>
        <div className='react'>
          <img src={react} alt="react" />
          <p>React</p>
        </div>
        <div className='c'>
          <img src={c} alt="c" />
          <p>C</p>
        </div>
        <div className='mysql'>
          <img src={mysql} alt="mysql" />
          <p>MySQL</p>
        </div>
        <div className='azure'>
          <img src={azure} alt="azure" />
          <p>Azure</p>
        </div>
      </div>
    </div>
      
  )
}

export default Tech

