import React from 'react';
import js_ts from '../Images/js-ts.svg';
import html_css from '../Images/html-css.svg';
import react_next from '../Images/react-next.svg';
import tailwind_sass from '../Images/tailwind-sass.svg';
import { motion } from 'framer-motion';
import me4 from '../Images/me4.png';

function TechStack() {
  return (
    <div className="bg-[#F9F9F9">
      <div className="col-span-4 grid grid-cols-4 gap-4 md:col-span-5 md:grid-cols-5 lg:col-span-6 lg:grid-cols-6 items-center px-[10vw] lg:px-[15vw] xl:px-[15vw] py-[30px] bg-[#F9F9F9]">

        <div className="hidden lg:block col-span-1 ml-0 mr-auto">
          <img src={me4} alt="Me" className="mx-auto h-[70px] lg:h-[100px] mr-[20px]" />
        </div>

        <div className="hidden md:block col-span-1 text-center">
          <p className="text-[#2D2E32] font-[600] mr-[20px]">Tech Stack</p>
        </div>

        <motion.div
          href="#"
          className="col-span-1"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img src={html_css} alt="HTML/CSS" className="w-full max-h-[70px]" />
        </motion.div>

        <motion.div
          href="#"
          className="col-span-1"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img src={js_ts} alt="JS/TS" className="w-full max-h-[70px]" />
        </motion.div>
        <motion.div
          href="#"
          className="col-span-1"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img src={react_next} alt="React/NextJS" className="w-full max-h-[70px]" />
        </motion.div>
        <motion.div
          href="#"
          className="col-span-1"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img src={tailwind_sass} alt="Tailwind/SASS" className="w-full max-h-[70px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
