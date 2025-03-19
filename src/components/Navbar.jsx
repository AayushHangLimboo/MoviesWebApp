import React from 'react'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Favourites from '../pages/Favourites'
import "../CSS/Navbar.css"


function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            {/*<a href="/">Mobie App</a>*/ }
            <Link to="/">Movie App</Link>
        </div>
        <div>
            <Link to="/" className="nav-link">
                Movie App
            </Link>
            <Link to="/" className='nav-link'>
                    {"  "} Favourites
                </Link>
        </div>
        
    </nav>
  )
}

export default Navbar