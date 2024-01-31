import React from 'react'
import { Projects, Header, Email } from "./containers"
import { Tech, Navbar } from "./components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Tech />
        <Projects />
        <Email />
    </div>
  )
}

export default App
