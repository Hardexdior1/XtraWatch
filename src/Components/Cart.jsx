import React, { useEffect } from "react";
import "../Styles/Section4.css";
import rating from "../images/yellow star.jfif";

const Cart = ({ cart, cartTotal,removeFromCart,clear }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="margin">
    {cart.length > 0 ? (
        <b>{cart.length <2? <b>{cart.length} product in your cart </b>:<b>{cart.length} products in your cart </b>} </b>
      ) : (
        <b>no products in your cart</b>
      )}
    </div>
      <div className="watchFlex watchFlex1">
        {cart.map((eachItem) => {
          const { name, price, normalPrice, img, sale ,increaseCart} = eachItem;

          return (
            <div className="watchSub" key={eachItem.id}> 
            <div className="removeWrap">
            <b onClick={()=>{
              removeFromCart(eachItem)
            }}>x</b>
            </div>
              <div className="watchCarrier">
                <img src={img} alt={name} />
              </div>
              <div>
                <p className="name">{name}</p>

              

                <p>
                  {" "}
                  <del>{normalPrice}</del>
                  <strong className="price">${price}</strong>

                

                </p>

                {sale ? <b className="sale">Sale</b> : ""}
              </div>
            </div>
          );
        })}
      </div>

      <div className="margin">
      {cart.length>0?<span>
        TotalPrice: <b className="green">${cartTotal}</b>
      </span>:<span>
       <b> TotalPrice:</b> <b>{cartTotal}</b>
      </span>}
      </div>

   {cart.length>0?   <div className="flexClear">
        <button onClick={clear}>Clear Cart </button>
      </div>:''}
    </div>
  );
};

export default Cart;
