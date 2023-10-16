import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaTwitter, FaGithub } from "react-icons/fa";

function Header() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Use useEffect to set the image height to match the container's height
  useEffect(() => {
    if (containerRef.current && imageRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      imageRef.current.style.height = `${containerHeight}px`;
    }
  }, []);

  return (
    <div className="flex xl:ml-[15vw] mx-[10vw] 2xl:mx-[15vw]" ref={containerRef}>
      <div
        
        className="w-5/5  my-[150px] 2xl:my-[225px] mb-[200px] z-10" 
      >
        <div className="leading-[80px]">
        <h1 className="font-[600] text-[#FD9D4D]">Full-Stack</h1>
        <h1 className="font-[600] text-white">Web Developer</h1>
        <p className="2xl:hidden font-normal mt-[20px] text-[20px] leading-[1.35] text-[#ADACAF]">
          Hey, I'm David — a passionate full-stack web<br/>
          developer. I love pushing creative boundaries,<br/>
          coding & designing unique user experiences.
        </p>
        <p className="hidden 2xl:block font-normal mt-[20px] text-[20px] leading-[1.35] text-[#ADACAF]">
          Hey, I'm David — a passionate full-stack web
          developer. I love pushing <br /> creative boundaries,
          coding & designing unique user experiences.
        </p>
      </div>
      <motion.button
        href="#"
        className="font-medium ] rounded-full mt-[50px] bg-[#FD9D4D] px-10 py-3 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Let's Chat
      </motion.button>

      <div className="mr-[10px] mt-[20px] flex flex-row gap-3 text-2xl text-white">
        <motion.a
          href="#"
          className=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <FaTwitter className="text-4xl" />
        </motion.a>

        <motion.a
          href="#"
          className=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <FaGithub className="text-4xl" />
        </motion.a>
      </div>
      </div>
      {/* <div className="hidden xl:block xl:w-3/5">
        <img
          ref={imageRef}
          src={phoenix}
          alt="Matching Image"
          className="object-bottom object-scale-down"
        />
      </div> */}
    </div>
  );
}

export default Header;
