import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#151B25] text-white py-10">

  {/* Row 1: FaTwitter and FaGithub icons */}
  <div className="flex space-x-4">
    <motion.a
      href="#"
      className=""
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <FaTwitter className="text-2xl" />
    </motion.a>

    <motion.a
      href="#"
      className=""
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <FaGithub className="text-2xl" />
    </motion.a>
  </div>

  {/* Row 2: Copyright notice */}
  <p className="text-[15px] mt-[20px]">© Devecreative. All rights reserved.</p>
</div>


  );
}

export default Footer;
