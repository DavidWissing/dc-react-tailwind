import React from 'react';
import technologies from '../Images/tabs 3.png'

function Projects() {
  return (
    <div className="bg-white px-[8%] pt-[70px]">
      <h2 className="text-[20px] font-[700] text-[#FD9D4D]">MY WORK</h2>
        <h1 className=" text-[35px] font-[750] leading-10 text-[#2D2E32]">
          Projects
        </h1>

        <div className='lg:flex'>
  <div className='w-full lg:w-1/2 h-[500px] lg:mb-0 lg:mr-4'>
    <div className='h-1/2 w-auto bg-[#151B25] rounded-t-[20px]'></div>
    <div className='h-auto bg-[#F2F2F2] rounded-b-[20px] p-4'>
      <div className='bg-[#151B25] w-[35%] items-center text-center'><h2 className='font-[900] text-white my-[15px] text-[30px]'>Example</h2></div>
      <p className='text-[#777777] text-[20px] pb-4 font-[500]'>Behold, impressive Airbnb clone: It replicates the sleek UI of the original and packs a multitude of features. criteria, create a ...</p>
      <img src={technologies} alt='technologies' className='w-auto' />
    </div>
  </div>

  <div className='w-full lg:w-1/2 h-[500px] lg:mb-0 lg:mr-4 mt-[0px]'>
    <div className='h-1/2 w-auto bg-[#151B25] rounded-t-[20px]'></div>
    <div className='h-auto bg-[#F2F2F2] rounded-b-[20px] p-4'>
      <div className='bg-[#151B25] w-[35%] items-center text-center'><h2 className='font-[900] text-white my-[15px] text-[30px]'>Example</h2></div>
      <p className='text-[#777777] text-[20px] pb-4 font-[500]'>Behold, impressive Airbnb clone: It replicates the sleek UI of the original and packs a multitude of features. criteria, create a ...</p>
      <img src={technologies} alt='technologies' className='w-auto' />
    </div>
  </div>



</div>

    </div>
  );
}

export default Projects;
