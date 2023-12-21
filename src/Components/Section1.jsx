import React, { useEffect, useState } from "react";
import "../Styles/Hero.css";
import slide2 from "../images/slide-2.png";
import slide1 from "../images/section01-img02.png";
import testimonial1 from "../images/testimonial-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial2 from "../images/testimonial-4.jpg";
const Section1 = () => {

  
  
  
  return (
    <div>
        
        <div className="section1Carrier">
     
      
       <section className="section">
          <div className="first ">
            <h3>Be online always and everywhere </h3>
            <h2 className="white">For all Seasons </h2>
            <h1>Any Circumstances </h1>

            <div className="btnCarrier">
              <button className="purchase">Purchase Now</button>

              <button className="watch">Watch Video</button>
            </div>
          </div>

          <div className="section1ImgCarrier">
            <img src={slide2} alt="slide-img" />
          </div>
        </section>
          
  
    </div>
    </div>
  );
};

export default Section1;
