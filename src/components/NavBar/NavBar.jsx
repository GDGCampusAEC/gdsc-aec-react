import React from 'react'
import Logo from '../../Assests/dsc_logo.bd954cee.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="h-[4.5rem] shadow-lg flex justify-between px-[9em] items-center w-[100%]">
        <div className="flex justify-center items-center gap-2">
          <div>
            <img src={Logo} className="h-[1.7rem]" />
          </div>
            <h1 className="text-3xl font-semibold text-[#868686]">AEC</h1>
        </div>
        <div>
          <ul className="flex gap-8 text-[#868686] text-md ">
            <li className="hover:text-blue-300 hover:cursor-pointer font-normal">
              <NavLink to="/"  >Home</NavLink>
            </li>
            <li className="hover:text-blue-300 hover:cursor-pointer font-normal">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="hover:text-blue-300 hover:cursor-pointer font-normal">
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li className="hover:text-blue-300 hover:cursor-pointer font-normal">
              <NavLink to="/team">Team</NavLink>
            </li>
            <li className="hover:text-blue-300 hover:cursor-pointer font-normal">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default NavBar
