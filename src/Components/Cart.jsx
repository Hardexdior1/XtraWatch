import React, { useEffect, useState } from "react";
// import "../Styles/Section4.css";
import "../Styles/Style.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRemoveFormat } from "react-icons/fa";
import { FcDeleteRow } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { Link } from "react-router-dom";


const Cart = ({
  cart,
  cartTotal,
  removeFromCart,
  clear,
  incrementQuantity,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // console.log(incrementQuantity);
  // const [quantity,setQuantity]=useState()
  // console.log(quantity)
  // Format the total price
  const formattedPrice = formatter.format(cartTotal);

  let name = cart.map((name) => name.name);

  return (
    <div>
    
      <center className="margin">
        {cart.length > 0 ? (
          <b>
            {cart.length < 2 ? (
              <b>{cart.length} product in your cart </b>
            ) : (
              <b>{cart.length} products in your cart </b>
            )}{" "}
          </b>
        ) : (
          <b>no products in your cart</b>
        )}
      </center>

     {cart.length>0? <div className="cartWrapper">
        <div className="cartWrap">
          {cart.map((eachItem) => {
            const {
              name,
              price,
              normalPrice,
              img,
              sale,
              increaseCart,
              quantity,
            } = eachItem;

            return (
              <div key={eachItem.id}>
                <div className="itemSectionPadding">
                  <div>
                    <div className="flexPriceAndImage">
                      <div className="watchAndNameCarrier">
                        <div>
                          <img src={img} alt="product-img" />
                        </div>

                        <div>
                          <h4 className="name">{name}</h4>
                          <div className="flexSeller">
                            <p className="seller">seller: </p>
                            <p>xtrawatch</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="price"> ${price}</h2>
                        <h4 className="del">
                          <del>{normalPrice} </del>
                        </h4>
                      </div>
                    </div>

                    <div className="flexRemove">
                      <div
                        className="remove1"
                        onClick={() => {
                          removeFromCart(eachItem);
                        }}>
                        <MdDelete />
                        <p>
                          <b>Remove</b>
                        </p>
                      </div>

                      <div className="btnCarrier">
                        <button>-</button>
                        <p>{quantity}</p>
                        <button
                          onClick={() => {
                            incrementQuantity(eachItem);
                          }}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="line1"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="summary">
          <h3>CART SUMMARY</h3>

          <div className="totalFlex">
            <h4>Subtotal </h4>
            <h3>{formattedPrice}</h3>
          </div>
          <Link to="/Checkout" >
            {" "}
            <button>
              CHECKOUT {"("} {formattedPrice} {")"}
            </button>
          </Link>
        </div>
      </div>:<Link to="/WatchPage" >
            
            <button>
              continue shopping
            </button>
          </Link>}
    </div>
  );
};

export default Cart;
