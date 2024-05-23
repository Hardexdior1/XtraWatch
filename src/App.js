import "./App.css";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
// import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Footer from "./Components/Footer";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import dark from "./images/darlmode.png";
import light from "./images/lightmode.png";
import Faq from "./Components/Faq";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Components/Testimonial";
import Watches from "./Components/Watches";
import WatchPage from "./Components/WatchPage";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
// ren .git .git_backup
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const background = useRef();
  const change = useRef();
  const change2 = useRef();

  const [message, setMessage] = useState("");

  const [mode, setMode] = useState(true);
  const changeToBlack = () => {
    background.current.classList.remove("App");
    background.current.classList.add("AppBlack");
  };

  const changeToDark = () => {
    background.current.classList.add("App");
    background.current.classList.remove("AppBlack");
  };

  const [cart, setCart] = useState([]);
  console.log(cart)
  // let quantity = cart.map((item)=>item.quantity)
  let length = cart.length;
  const cartTotal = cart.reduce(
    (total, price) => total + price.price * price.quantity,
    0
  );

  
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");

  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, []);
  

  const addToCart = (product) => {
    setShowMessage(true);

    setCart((prev) => {
      const itemExit = cart.find((item) => item.id == product.id);

      if (itemExit) {
        return prev;
      }
      setMessage("Product has been added to cart");

      let timeoutId = setTimeout(() => {
        setMessage("");
        setShowMessage(false);
      }, 2000);

      setTimeout(() => {
        clearTimeout(timeoutId);
      }, 2000);

      // localStorage.setItem("cart", JSON.stringify([...prev, product]));
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      // localStorage.setItem("cart", JSON.stringify([...currentCart, item]));


      if (indexOfItemToRemove === -1) {
        return currentCart;
      }


      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };
  const incrementQuantity = (product) => {
    // setQuantity(product.quantity+1)
    setCart((prevCart) =>
      prevCart.map((item) =>
        item === product ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // const decreamentQuantity = (product) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item === product ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  

  const clear = () => {
    setCart([]);
  };

  const increaseCart = (item) => {
    const length = cart.map((product) => product.price == item.price);
    console.log(length);
  };
  const [showMessage, setShowMessage] = useState(false);
  return (
    <section className="App" ref={background}>
      {mode ? (
        <img
          className="mode"
          onClick={() => {
            changeToBlack();
            setMode(false);
          }}
          src={dark}
          alt="dark-img"
        />
      ) : (
        <img
          className="mode"
          onClick={() => {
            changeToDark();
            setMode(true);
          }}
          src={light}
          alt="light-img"
        />
      )}
      <BrowserRouter>
        <NavBar length={length} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                change={change}
                change2={change2}
                addToCart={addToCart}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route
            path="/WatchPage"
            element={<WatchPage addToCart={addToCart} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Checkout"
            element={
              <Checkout
                cart={cart}
                cartTotal={cartTotal}
                removeFromCart={removeFromCart}
                clear={clear}
                // quantity={quantity}
              />
            }
          />

          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                cartTotal={cartTotal}
                removeFromCart={removeFromCart}
                clear={clear}
                incrementQuantity={incrementQuantity}
                increaseCart={increaseCart}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      {showMessage ? <p className="message">{message}</p> : ""}

      <a className="top" href="#">
        ^
      </a>
      <a href="">REFRESH</a>
    </section>
  );
}

export default App;
