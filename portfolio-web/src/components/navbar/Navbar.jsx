import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"

const Menu = () => (
<> 
  <p><a href='#home'>About Me</a></p>
  <p><a href='#tech'>Skills</a></p>
  <p><a href='#projects'>Projects</a></p>
  <p><a href='#email'>Contact</a></p>
</>
)
 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='port__navbar'>
      <div className='port__navbar-links'> 
        <div className='port__navbar-links_logo'>
          <h1>CZ</h1>
        </div>
        <div className='port__navbar-links_container'>
          <Menu />
        </div>
      </div>
      
      
      {/* Mobile Menu */}
      <div className='port__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={25} onClick={() => setToggleMenu(false) }/>
          : <RiMenu3Line color="#fff" size={25} onClick={() => setToggleMenu(true) }/>}
        {toggleMenu && (
        <div className="port__navbar-menu_container scale-up-center">
          <div className='port__navbar-menu_container-links '>
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
