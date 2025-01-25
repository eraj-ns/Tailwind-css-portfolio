import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="container pt-8">
            <div className="flex justify-between items-center">
               <div className="text-xl font-large">Eraj Naz</div>
               <ul className="gap-20 lg:gap-25 hidden md:flex">
                <li className="menuLink"><a href="#hero">Home</a></li>
                <li className="menuLink"><a href="#about">About</a></li>
                <li className="menuLink"><a href="#projects">Projects</a></li>
                <li className="menuLink"><a href="#skills">Skills</a></li>
                <li className="menuLink"><a href="#contact">Contact</a></li>
               </ul>
      </div>
      </div>
  );
};

export default Navbar