import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative text-slate-600 bg-slate-950">
<<<<<<< HEAD
      <div className="flex flex-col md:flex-row justify-between pt-4 ml-4 md:ml-[10rem] mr-4 md:mr-[10rem]">
=======
      <div className="flex flex-col md:flex-row justify-between ml-4 md:ml-[10rem] mr-4 md:mr-[10rem]">
>>>>>>> 8edfb0f806db73a6c5fa74aa22c70469c2ea7a62
        <div className="mb-4 text-center md:text-left md:mb-0">
          <p className="text-[#6D6D6D] text-base not-italic font-extrabold leading-[29.2px] uppercase">
            Dive into the new world of in-house music
          </p>
          <p className="w-full md:w-[20vw] pt-4 text-[#6D6D6D] text-lg not-italic font-medium leading-[normal]">
            Lorem ipsum dolor sit amet consectetur. At porttitor ut felis nisl
            ultrices sed sit. Cras nibh quis et diam justo in. Sollicitudin enim
            tincidunt eros mauris senectus neque.
          </p>
        </div>
        <div className="mb-4 text-center md:text-left md:mb-0">
          <p className="text-[#6D6D6D] text-base not-italic font-extrabold leading-[29.2px] uppercase">
            VISIT
          </p>
          <ul className="w-full md:w-[20vw] text-[#6D6D6D] text-[32px] not-italic font-medium leading-[30.214px] tracking-[-1px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Get in touch</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[#6D6D6D] text-base not-italic font-extrabold leading-[29.2px] uppercase">
            SOCIALS
          </p>
          <ul className="flex justify-center gap-3 md:justify-start">
            <li>
<<<<<<< HEAD
              <FaInstagram size="3em" />
            </li>
            <li>
              <FaTwitter size="3em" />
            </li>
            <li>
              <FaLinkedin size="3em" />
=======
              <FaInstagram size="2em" />
            </li>
            <li>
              <FaTwitter size="2em" />
            </li>
            <li>
              <FaLinkedin size="2em" />
>>>>>>> 8edfb0f806db73a6c5fa74aa22c70469c2ea7a62
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center md:text-left text-[15vw] text-[#6D6D6D] relative md:pl-[7rem] font-medium font-family: Poppins">
        GDSC AEC
      </div>
    </div>
  );
}
