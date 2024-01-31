import React from 'react';
import Article from '../../components/project/Project';
import { projects01, projects02, projects03, projects04, } from './imports';
import {python, java, html, react, c, mysql, aws, mongodb, express, azure, nodejs } from "./imports"
import './projects.css';

const Projects = () => (
  <div className="port__projects section__padding" id="projects">
    <div className="port__projects-heading">
      <p className='personal'>Personal Projects</p>
      <p className='freetime'>In my free time, I like to create stuff. Here they are:</p>
    </div>
    <div className="port__projects-container">
      
      <div className="port__projects-container_groupA">
        <Article imgUrl={projects02} date="Jul 2023 - Jan 2024" text="coreyzh" description='Fullstack MERN social media website'/>
        <div className='port__projects-tech-container'>
          <div className='mongodb_img'>
            <img src={mongodb} alt='mongodb'/>
          </div>
          <div className='java_img'>
            <img src={express} alt='express'/>
          </div>
          <div className='react_img'>
            <img src={react} alt='react'/>
          </div>
          <div className='nodejs_img'>
            <img src={nodejs} alt='nodejs'/>
          </div>
          <div className='azure_img'>
            <img src={azure} alt='azure'/>
          </div>
        </div>
        <div className='github_code'>
        <a href='https://github.com/coreyzhao/coreyzhweb' target='blank'><p>Click here for the code</p></a>
        </div>
      </div>
      <div className="port__projects-container_groupA">
        <Article imgUrl={projects01} date="Dec 2023 - Jan 2024" text="Portfolio Website" 
        description='The website you are looking at right now'  />
        <div className='port__projects-tech-container'>
          <div className='react_img'>
            <img src={react} alt='react'/>
          </div>
          <div className='html_img'>
            <img src={html} alt='html'/>
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space_1'>
            
          </div>
          
          
        </div>
        <div className='github_code'>
          <a href='https://github.com/coreyzhao/cz-portfolio' target='blank'><p>Click here for the code</p></a>
        </div>
      </div>
      <div className="port__projects-container_groupA">
        <Article imgUrl={projects03} date="Aug 2018" text="Snake Game" description="Recreation of the iconic snake game with python with OOP" />
        <div className='port__projects-tech-container'>
          <div className='python_img'>
            <img src={python} alt='python'/>
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
          <div className='blank_space'>
            
          </div>
         
        </div>
        <div className='github_code'>
          <a href='https://github.com/coreyzhao/snakeGame' target='blank'><p>Click here for the code</p></a>
        </div>
      </div>
      <div className="port__projects-container_groupA">
        <Article imgUrl={projects04} date="Dec 2023 - Present" text="Pronunciation Helper (In Progress)" description="Full Stack Website that helps users improve their pronunciation" />
        <div className='port__projects-tech-container'>
          <div className='java_img'>
            <img src={java} alt='java'/>
          </div>
          <div className='mysql_img'>
            <img src={mysql} alt='mysql'/>
          </div>
          <div className='react_img'>
            <img src={react} alt='react'/>
          </div>
          <div className='html_img'>
            <img src={html} alt='html'/>
          </div>
        </div>
        <div className='github_code'>
          <p>Code not available</p>
        </div>
      </div>
      
    </div>
  </div>
);

export default Projects;
