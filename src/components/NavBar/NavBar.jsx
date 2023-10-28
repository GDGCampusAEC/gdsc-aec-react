import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Assests/gdsc-logo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="w-[100%] h-[12vh]  flex justify-between md:justify-center  lg:justify-center items-center px-[5vw] md:px-0 lg:px-0 py-6 relative">
      <div className="flex justify-center items-center md:absolute lg:absolute md:left-[5vw] lg:left-[5vw] gap-1">
        <img src={Logo} alt="image" className="h-[3.5rem]" />
        <h1 className="font-bold text-lg text-[#767676]">GDSC AEC</h1>
      </div>

      <div
        className="p-3 rounded-full block lg:hidden md:hidden  z-40"
        style={{ boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        {click ? (
          <FaTimes onClick={() => setClick(!click)} className="z-20 relative hover:cursor-pointer"/>
        ) : (
          <FaBars onClick={() => setClick(!click)} className="z-20 relative hover:cursor-pointer" />
        )}
        {click && (
          <div
            className="w-[12rem] h-[17rem] bg-white absolute z-10 top-0 right-0 block lg:hidden md:hidden rounded-lg"
            style={{ boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)" }}
          >
            <ul className=" flex flex-col justify-center mt-[13vh] gap-4 items-center text-md text-[#535353]">
              <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
                <a href="#about">About us</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
                <a href="#event">Event</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
                <a href="#team">Our team</a>
              </li>
              <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        style={{ boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)" }}
        className="  px-[5em] rounded-full hidden md:block lg:block md:ml-[20vw] lg:ml-0"
      >
        <ul className=" flex justify-center items-center  gap-12 text-sm h-[6.4vh] text-[#535353] transition-all delay-300">
          <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
            <a href="#about">About us</a>
          </li>
          <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
            <a href="#event">Event</a>
          </li>
          <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
            <a href="#team">Our team</a>
          </li>
          <li className="hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
