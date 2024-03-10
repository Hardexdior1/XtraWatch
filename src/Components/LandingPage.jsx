import React, { useRef, useState } from "react";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Watches from "./WatchData";

import Section4 from "../Components/Section4";

import testimonial2 from "../images/testimonial-4.jpg";
import testimonial1 from "../images/testimonial-3.jpg";
import manAirPod from "../images/man-airpods.jpg";
import watchFront from "../images/watch-front-home.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../Styles/Section4.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const LandingPage = ({ change, change2, addToCart }) => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="section4">
        <h1>
          <span>Pear-Watch</span> Products
        </h1>

        <p className="para">
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use.
        </p>
      </div>
      <div
        className="watchFlex watchFlex1
">
        {Watches.map((item) => {
          return (
            <Section4
              key={item.id}
              {...item}
              change={change}
              change2={change2}
              addToCart={() => addToCart(item)}
            />
          );
        })}
      </div>

      <section className="testimonials">
        <div className="">
          <div className="testimonial-slider">
            <h4>Testimonials </h4>
            <h2>This Watch is amazing! affordable price </h2>

            <Slider {...settings} className="testimonialBox">
              <div>
                <p>
                  I don't always clop, but when i do, it's because of pear
                  watch. pear watch has really helped me. i STRONGLY recommend
                  pear watch to EVERYONE interested in fashion&tech This is
                  simply unbelievable{" "}
                </p>
                <div className="imgAndText">
                  <div>
                    <img src={testimonial1} alt="testimonial-img" />
                  </div>

                  <div>
                    <h5 className="change2" ref={change2}>
                      John Carter
                    </h5>
                    <p>UX Designer </p>
                  </div>
                </div>
              </div>

              <div>
                <p>
                  I don't always clop, but when i do, it's because of pear
                  watch. pear watch has really helped me. i STRONGLY recommend
                  pear watch to EVERYONE interested in fashion&tech This is
                  simply unbelievable{" "}
                </p>
                <div className="imgAndText">
                  <div>
                    <img src={testimonial2} alt="testimonial-img" />
                  </div>

                  <div>
                    <h5 className="change2" ref={change2}>
                      Angela kidjo{" "}
                    </h5>
                    <p>Programmer </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="satisfiedCarrier fullWidth ">
          <div className="subSatisfied">
            <img className="satisfied" src={manAirPod} alt="testimonial-img" />

            <img className="watchFront" src={watchFront} alt="watch-img" />
          </div>
        </div>
      </section>
      <section className="nearByFlex ">
        <section className="nearByWrap">
          <h1>Nearby Pear-Watch Stores</h1>
          <p>
            A smartwatch is a wearable computer in the form of a watch; modern
            smartwatches provide a local touchscreen interface for daily use.
          </p>

          <div className="btn1">
            <Link to="/WatchPage">
              <button className="purchase2">Purchase Now</button>
            </Link>
            <Link to="/WatchPage">
              {" "}
              <button className="find">Find Nearby Stores </button>
            </Link>
          </div>
        </section>
      </section>
      {/* <Section4 change={change} change2={change2} Watches={Watches} addToCart={addToCart}/> */}

      {/* <Link to='./Collections'>Collections</Link> */}
    </div>
  );
};

export default LandingPage;
