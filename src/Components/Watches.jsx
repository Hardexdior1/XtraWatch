import React, { useEffect } from "react";
import "../Styles/Section4.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Watches = ({ img, name, price, normalPrice, sale, addToCart,increase, storage,id}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

console.log(id)
  
  return (
    <div>
      <div className="watchSub">
      <Link to={"/Watches/"+ id}>
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
              addToCart()
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
