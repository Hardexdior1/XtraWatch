import "./App.css";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { useEffect, useRef, useState } from "react";
import dark from "./images/darlmode.png";
import light from "./images/lightmode.png";
import Faq from "./Components/Faq";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchPage from "./Components/WatchPage";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import WatchInfo from "./Pages/WatchInfo";
import Chart from "./Components/Chart";
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
  // const [length,setLength]=useState(cart.length)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
    }
  }, []);

  const cartTotal = cart.reduce(
    (total, price) => total + price.price * price.quantity,
    0
  );

  const addToCart = (product) => {
    setShowMessage(true);
    setCart((prev) => {
      const itemExit = cart.find((item) => item.id == product.id);
      if (itemExit) {
        alert("item already in cart");
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
      localStorage.setItem(
        "cart",
        JSON.stringify([...prev, { ...product, quantity: 1 }])
      );
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (indexOfItemToRemove === -1) {
        return currentCart;
      }
      const updatedCart = [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
      // localStorage.setItem('cart', JSON.stringify([...prev, {...product, quantity: 1 }]));
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  //

  const incrementQuantity = (product) => {
    setCart((prev) => {
      let quat = prev.map((item) =>
        item === product ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(quat));
      return quat;
    });
  };
  const decrementQuantity = (product) => {
    setCart((prev) => {
      let updatedCart = prev.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });

      // Update the local storage with the new cart state
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Return the updated cart state
      return updatedCart;
    });
  };

  const clear = () => {
    setCart((prev) => {
      prev = [];
      localStorage.setItem("cart", JSON.stringify(prev));
      return prev;
    });
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
        <NavBar length={cart} />
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
          <Route
            path="/Watches/:id"
            element={<WatchInfo addToCart={addToCart} />}
          />
          <Route
            path="/Section4/:id"
            element={<WatchInfo addToCart={addToCart} />}
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
                decrementQuantity={decrementQuantity}
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

      {/* <Chart /> */}
    </section>
  );
}

export default App;
