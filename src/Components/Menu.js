import React from "react";
import logo from "../Images/logo-text.png";
import { motion } from "framer-motion";
import '../App.css';

function Menu() {
  return (
    <nav className="flex items-center mx-[10vw] 2xl:mx-[15vw] justify-between pt-[40px]">
        <div className="flex">
            <img className="h-10 inline" src={logo} alt="Logo" />
        </div>
        
        <ul className="flex items-center gap-[15px]">
            <li>
                <a className="hidden sm:block text-white" href="#services">Services</a>
            </li>
            <li>
                <a className="hidden sm:block text-white" href="#mywork">My Work</a>
            </li>
            <li className="">
              <motion.button
                href="#"
                className="px-10 py-3 bg-[#FD9D4D] text-white font-medium rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact
              </motion.button>
            </li>
        </ul>
    </nav>
  );
}

export default Menu;
