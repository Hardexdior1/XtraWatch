import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import swal from "sweetalert";
import "../Styles/Checkout.css";
import { Country, State, City } from "country-state-city";

const Checkout = ({
  cart,
  cartTotal,
  removeFromCart,
  clear,
  incrementQuantity,
}) => {
  const [state, handleSubmit] = useForm("xpzveprv");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedPrice = formatter.format(cartTotal);

  const [Email, setEmail] = useState("");
  const [countries, setCountries] = useState("");
  const [address, setAddress] = useState("");
  const [allCountries, SetCountry] = useState(Country.getAllCountries());
  const [allStates, setAllState] = useState(State.getAllStates(countries));
  const [name, setName] = useState("");
  const [userOrderCode, setUserOrderCode] = useState("");

  // let random=Math.floor(Math.random()*500)
  // let code=random+name+Email.substring(0,5)

  let code = "#"+Math.floor(Math.random() * 500) + name;

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
        <textarea
          onChange={handleAddress}
          name="Address"
          placeholder="Delivery Address"
          value={address}
          rows={3}></textarea>

        <select name="Country" id="" onChange={handleCountry}>
          <option value=""> choose your country </option>
          {allCountries.map((country) => {
            return <option value={country.name}> {country.name} </option>;
          })}
        </select>
        <input type="text" name="orderCode" value={userOrderCode} readOnly className="hideOrder"/>

        <input type="text" readOnly name="Total" value={formattedPrice} />

        <button
          type="submit"
          onClick={() => {
            setUserOrderCode(code);
          }}>
          submit
        </button>
        {/* <textarea name="ProductName" id="" readOnly value={name+ " "+quantity}></textarea> */}
      </form>
    </div>
  );
};

export default Checkout;

//
//

// "use client";
// import React from "react";
//
// import { useState, useRef } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

//

//   // const [value, setValue] = useState("");
//   const [institute, setInstitute] = useState("");
//   const [educationLevel, setEducationLevel] = useState("");
//   const [phone, setPhone] = useState("");
//   const [mail, setMail] = useState("");
//   const [message, setMessage] = useState("");
//
//

//   const handleChange = (event: any) => {
//     setPhone(event);
//     // console.log(event);
//   };
//   const handleMessage = (e: any) => {
//     setMessage(e.target.value);
//     console.log(e.target.value);
//   };

//
//   const submitInstiTute = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setInstitute(e.target.value);
//     console.log(e.target.value);
//   };
//   const submitEducationalLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setEducationLevel(e.target.value);
//     console.log(e.target.value);
//   };
//   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMail(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (
//       mail.trim() !== "" &&
//       institute.trim() !== "" &&
//       educationLevel.trim() !== "" &&
//       phone.trim() !== "" &&
//       message.trim() !== "" &&
//       name1.trim() !== ""
//     ) {
//       swal({
//         title: "Good job!",
//         text: "Hi " + name1 + " your message has been submitted successfully!",
//         icon: "success",
//       });
//       handleSubmit(e);
//       clearForm();
//     } else {
//       swal({
//         title: "oops!",
//         text: "please fill all the empty input!",
//         icon: "error",
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="mt-4 mb-4  px-5 py-5 lg:px-28">
//         <center>
//           <h1 className="text-blueG text-2xl font-bold">Get In Touch </h1>
//         </center>
