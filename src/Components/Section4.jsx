import React from "react";
import "../Styles/Section4.css";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

import "../Styles/Testimonial.css";

const Section4 = ({
  change,
  change2,
  addToCart,
  name,
  price,
  normalPrice,
  img,
  sale,
  id,
}) => {
  return (
    <div>
      <section className="section4">
        <div className="">
          <div className="watchSub">
            <Link to={"/Section4/"+id}>
              <div className="watchCarrier">
                <img src={img} alt={name} />
              </div>
            </Link>
            <div>
              <p className="name">{name}</p>

              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                {" "}
                <del>{normalPrice}</del>
                <strong className="price">${price}</strong>
              </p>

              <button
                onClick={() => {
                  addToCart();
                }}>
                Add to cart{" "}
              </button>
              {sale ? <b className="sale">Sale</b> : ""}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonials">
        <div className="check">
          <h4 >Testimonials </h4>
          <h1  className="change" ref={ change} >This Watch is amazing! affordable price </h1>
          <div className="quoteCarrier">
            <img src={quote} alt="quoteIcon" className="quote" />
          </div>
          <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>

          <div className="imgAndText">
            <div>
              <img src={testimonial1} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2" ref={change2} >John Carter</h5>
              <p>UX Designer </p>
            </div>
          </div>
        </div>

        <div className="satisfiedCarrier">
          <div className="subSatisfied">
            <img className="satisfied" src={manAirPod} alt="testimonial-img" />

            <img className="watchFront" src={watchFront} alt="watch-img" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Section4;
