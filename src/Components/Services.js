import React from "react";
import checkmark from "../Images/checkmark-icon.png";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      <div className="bg-white px-[8%] pt-[70px]">
        <h2 className="text-[20px] font-[700] text-[#FD9D4D]">SERVICES</h2>
        <h1 className=" text-[35px] font-[750] leading-10 text-[#2D2E32]">
          Plans & Benefits
        </h1>

        <motion.div
          href="#"
          className="my-[10px] mt-[20px] grid h-auto select-none grid-cols-2 rounded-[20px] border-[5px] border-[#FD9D4D] bg-white py-[10px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* First column */}
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-[35px] font-[750] leading-10 text-[#2D2E32]">
              Essential
            </h1>
            <p className="text-center text-[14px] font-[500] text-[#FC9D59]">
              Perfect for startups & small <br /> businesses
            </p>
          </div>
          {/* Second column */}
          <div className="my-auto mr-[10px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <h1 className="mr-2 text-[50px] font-[850] leading-none text-[#2D2E32]">
                  $499
                </h1>
                <p className="font-light mb-[10px] mt-auto text-sm text-[#7E7E7E]">
                  /Once
                </p>
              </div>
              <hr className="w-[200px] border-[5px] border-[#FC9D59]" />
            </div>
          </div>
        </motion.div>

        <ul className="mt-[20px]">
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">5 Pages</p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="my-auto flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">Responsive</p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Basic Logo Design
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Basic SEO Optimization
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              UI Design & Development
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-white px-[8%]">
        <motion.div
          href="#"
          className="my-[10px] mt-[20px] grid h-auto select-none grid-cols-2 rounded-[20px] border-[5px] border-[#F2F2F2] bg-[#FD9D4D] py-[10px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* First column */}
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-[35px] font-[750] leading-10 text-[#2D2E32]">
              Plus
            </h1>
            <p className="text-center text-[14px] font-[500] text-white">
              For those seeking top-tier <br /> online presence
            </p>
          </div>
          {/* Second column */}
          <div className="my-auto mr-[10px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <h1 className="mr-2 text-[50px] font-[850] leading-none text-[#2D2E32]">
                  $1499
                </h1>
                <p className="font-light mb-[10px] mt-auto text-sm text-white">
                  /Once
                </p>
              </div>
              <hr className="w-[200px] border-[5px] border-white" />
            </div>
          </div>
        </motion.div>

        <ul className="mt-[20px]">
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Unlimited Pages
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="my-auto flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Custom Graphics & Animations
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Advanced SEO & Analytics
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              Custom-Built Features
            </p>
          </li>
          <hr className="my-[15px] border-[2px] border-[#E9E9EA]" />
          <li className="flex items-center">
            <motion.div
              href="#"
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={checkmark} alt="Custom Prefix" className="h-[30px]" />
            </motion.div>
            <p className="pl-[15px] text-[18px] text-[#2D2E32]">
              All Essential Perks
            </p>
          </li>
        </ul>
      </div>

      {/* 
            START OF Third Service
        */}
      <div className="bg-white px-[8%]">
        <motion.div
          href="#"
          className="my-[10px] mt-[20px] grid h-auto select-none grid-cols-2 rounded-[20px] border-[5px] border-[#424242] bg-[#151B25] py-[10px]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* First column */}
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-[35px] font-[750] leading-10 text-white">
              Pro
            </h1>
            <p className="text-center text-[12px] font-[500] text-white">
              In need of something extra? Reach <br /> out to me and we'll talk 
              specifics.
            </p>
          </div>
          {/* Second column */}
          <div className="my-auto mr-[10px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <h1 className="mr-2 text-[50px] font-[850] leading-none text-white">
                  Custom
                </h1>
              </div>
              <hr className="w-[200px] border-[5px] border-[#ff984f]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
