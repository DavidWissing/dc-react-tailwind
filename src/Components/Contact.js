import React from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="bg-white px-[8%] py-[70px]">
      <h2 className="text-[20px] font-[700] text-[#FD9D4D]">CONTACT</h2>
      <h1 className=" text-[35px] font-[750] leading-10 text-[#2D2E32]">
        Let’s Chat!
      </h1>
      <div className="mt-[20px] flex items-center">
        <div className="h-5 w-5 rounded-full bg-[#00A34C]"></div>
        <span className="ml-2 text-[20px] text-[#888]">Available for work</span>
      </div>
      <motion.button
        href="#"
        className="font-medium ] mt-[15px] rounded-full bg-[#FD9D4D] px-10 py-3 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <p>Book A Call</p>
      </motion.button>
      <ContactForm/>
      <p className="flex items-center text-sm mt-[20px]">
      <FaClock className="text-gray-600" /> {/* Clock Icon */}
      <span className="ml-2 text-black">Avg. response</span>
      <span className="ml-2 text-gray-600">3 hours</span>
    </p>
    </div>
  );
}

export default Contact;
