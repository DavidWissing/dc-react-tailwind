import React from "react";
import egg from "../Images/egg-space.png";

function TechStack() {
  return (
    <div className="bg-white px-[10vw] py-[70px] lg:px-[15vw] xl:px-[15vw]">
      <div className="xl:flex">
        <div className="hidden xl:block w-1/2 px-5">
          <img
            src={egg}
            alt="egg"
            className="pr-10 pb-10 rounded-[30px]object-bottom"
          />
        </div>
        <div className="xl:w-1/2 xl:px-5">
          <h2 className="text-[20px] font-[700] text-[#FC9D59]">ABOUT ME</h2>
          <h1 className="text-[35px] font-[750] xl:hidden leading-10 text-[#2D2E32]">
            A dedicated Full-Stack
            <br />
            Web Developer based
            <br />
            in the Netherlands
          </h1>
          <h1 className="hidden xl:block text-[35px] font-[750] leading-10 text-[#2D2E32]">
            A dedicated Full-Stack
            Web Developer based
  
            in the Netherlands
          </h1>
          <p className="mt-[20px] xl:mt-[40px] text-[20px] text-[#ADACAF]">
            As a freelance full-stack web developer, I possess an impressive
            arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, SCSS,
            and more. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in creating
            dynamic and engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques.
            <br />
            <br />
            I'm dedicated to crafting innovative web solutions that not only
            meet but exceed client expectations. Whether it's developing
            interactive web applications or enhancing user interfaces, I'm
            committed to delivering high-quality results that make a
            difference."
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
