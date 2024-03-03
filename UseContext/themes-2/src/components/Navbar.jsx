import React from 'react'
import { Link } from 'react-router-dom'
import { useThem } from '../context/Them'

const Navbar = () => {

  const {theme, toggleThem} = useThem();

  return (
    <nav className='navbar'>
        <div>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
        </div>
        <div className='mode-switch'>
          <label>
            <input type="checkbox"
            onChange={toggleThem}
            checked ={theme === "dark"}
            />
            <span className='slider round'></span>
          </label>
        </div>
    </nav>
  )
}

export default Navbar
