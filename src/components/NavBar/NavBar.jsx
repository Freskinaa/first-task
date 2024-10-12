import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import logo from "../../assets/images/logo.svg"

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='navbar-content'>
                <div className='navbar-links'>
                    <NavLink to={'/'}> <img src={logo} alt="" /></NavLink>
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className='menu'>
                    <span>Menu</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar