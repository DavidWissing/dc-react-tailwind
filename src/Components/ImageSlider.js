import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import threem from '../Images/logos/3m.svg';
import barstool from '../Images/logos/barstool-store.svg';
import budweiser from '../Images/logos/budweiser.svg';
import buzzfeed from '../Images/logos/buzzfeed.svg';
import forbes from '../Images/logos/forbes.svg';
import macys from '../Images/logos/macys.svg';
import menshealth from '../Images/logos/menshealth.svg';
import mrbeast from '../Images/logos/mrbeast.svg';

const ImageSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      lazyload: true,
      speed: 500,
      slidesToShow: 5, // Adjust the number of slides visible at a time
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds (2 seconds in this example)
    };
  
    const images = [threem, barstool, budweiser, buzzfeed, forbes, macys, menshealth, mrbeast];
  
    return (
      <Slider {...settings} className="w-full bg-[#F9F9F9] px-[10vw] lg:px-[15vw] xl:px-[15vw]">
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image} alt={`${index}`} className="w-32 h-32" />
          </div>
        ))}
      </Slider>
    );
  };
  
  export default ImageSlider;
  
