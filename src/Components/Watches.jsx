import React from "react";
import "../Styles/Section4.css";
import { FaStar } from "react-icons/fa";

const Watches = ({ img, name, price, normalPrice, sale, addToCart }) => {
  return (
    <div>
      <div className="watchSub">
        <div className="watchCarrier">
          <img src={img} alt={name} />
        </div>
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
  );
};

export default Watches;
