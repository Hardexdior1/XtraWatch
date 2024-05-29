import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import swal from "sweetalert";
import "../Styles/Checkout.css";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";

const Checkout = ({
  cart,
  cartTotal,
  clear,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length == 0) {
      // Redirect to the homepage if the cart is empty and a user is trying to go to the checkout page
      navigate("/Cart");
    } else {
      // xpzveprv
    }
  }, []);
  const [state, handleSubmit] = useForm("mzbnqygg");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedPrice = formatter.format(cartTotal);

  const [Email, setEmail] = useState("");
  const [countries, setCountries] = useState("");
  console.log(countries);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [userOrderCode, setUserOrderCode] = useState("");
  let code = "#" + Math.floor(Math.random() * 500) + name;
  const clearForm = () => {
    setEmail("");
    setAddress("");
    setName("");
  };
  const handleCountry = (e) => {
    console.log(e.target.value);
    setCountries(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (
      Email.trim() !== "" &&
      emailRegex.test(Email) &&
      address.trim() !== "" &&
      countries.trim() !== "" &&
      name.trim() !== ""
    ) {
      swal({
        title: "Good job!",
        text:
          "Hi " +
          name +
          " your order has been placed successfully! " +
          " your order code is " +
          code +
          " do not forget it",
        icon: "success",
      });
      handleSubmit(e);
      clearForm();
      clear();
    } else {
      swal({
        title: "oops!",
        text: "please fill all the empty input! and make sure you're using a valid email address",
        icon: "error",
      });
    }
  };
  // xwkgjlae

  return (
    <div>
      {cart.length > 0 ? (
        <div className="checkoutWrap">
          <form onSubmit={handleSubmitForm} method="post">
            {cart.map((item) => {
              return (
                <div className="flexQuantity">
                  <input
                    readOnly
                    name="ProductInfo"
                    value={
                      "Product: " +
                      item.name +
                      " - " +
                      " Quantity: " +
                      item.quantity
                    }
                  />
                  <br /> <br />
                </div>
              );
            })}
            <input
              onChange={handleName}
              name="Name"
              placeholder="your name"
              value={name}
            />
            <input
              onChange={handleEmail}
              name="Email"
              placeholder="your email"
              value={Email}
            />
            <select name="Country" id="" onChange={handleCountry}>
              <option value=""> choose your country </option>
              {Country.getAllCountries().map((country) => {
                return <option value={country.name}> {country.name} </option>;
              })}
            </select>
            <textarea
              onChange={handleAddress}
              name="Address"
              placeholder="Delivery Address"
              value={address}
              rows={3}></textarea>
            {/* <select name="State" id="">
      <option value=""> choose your state </option>

      {State.getStatesOfCountry(countries).map((item)=>{
        <option value={item.isoCode}>
            {item.name}
        </option>
      })}
      </select> */}
            <input
              type="text"
              name="orderCode"
              value={userOrderCode}
              readOnly
              className="hideOrder"
            />
            <h3>
              <b>Total:</b>
            </h3>
            <input
              type="text"
              readOnly
              name="Total"
              value={formattedPrice}
              className="total"
            />
            <button
              type="submit"
              className="submit"
              
              onClick={() => {
                setUserOrderCode(code);

              }}>
              submit
            </button>{" "}
            <br /> <br /> <br />
           
          </form>
        </div>
      ) : (
        <p className="orderMessage">
          your order is being processed ... go to watches page to order more
          items{" "}
          <button className="ok"
            onClick={() => {
              navigate("/WatchPage");
            }}>
            ok
          </button>{" "}
        </p>
      )}
    </div>
  );
};

export default Checkout;

