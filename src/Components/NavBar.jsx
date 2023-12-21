import React, { useRef } from "react";
import "../Styles/NavBar.css";
import logo from "../images/watch-front-home.png";
import cartIcon from "../images/cart.PNG";
import { Link } from "react-router-dom";




const NavBar = ({ change4}) => {
    const toggleNav=useRef()
    const toggleHeader=useRef()

   const showNav=()=>{
    toggleNav.current.classList.remove('ul')
    toggleNav.current.classList.add('ulShow')

   }
   const hideNav=()=>{
    toggleNav.current.classList.add('ul')
    toggleNav.current.classList.remove('ulShow')

   }

   window.addEventListener('scroll',()=>{
    if(window.scrollY>1200){
      toggleHeader.current.classList.remove('header')
      toggleHeader.current.classList.add('fixed')
    }
   

    else{
      toggleHeader.current.classList.add('header')
      toggleHeader.current.classList.remove('fixed')
    }
    
   }
   
   )
  return (
    <div>
      
      <header className="header" ref={toggleHeader}>
        <nav className="nav">
            <div className="menu" onClick={()=>{
            showNav()
            console.log('hello world ');
          }}>

                <div className="mItem"></div>
                <div className="mItem"></div>
                <div className="mItem"></div>

            </div>
          <div className="logo">
            <Link to='/' path="/"> <div className="logoWrap"><div><img src={logo} alt="image" className="logoImg" /></div> <h3 className="xtra">XTRA<span>Watch</span></h3></div></Link>
          </div>

          <ul  className="ul" ref={toggleNav}>
            <li>
              {" "}
             
              <Link className="active" to='/' path="/" onClick={()=>{hideNav()}}>   Home</Link>
            </li>
            <li>
              {" "}
              <Link className="active" to="./About" onClick={()=>{hideNav()}}>About</Link>
              
            </li>
            <li>
              {" "}
              <Link className="active" to="./Faq" onClick={()=>{hideNav()}}>Questions </Link>
              
            </li>
            <li>
              {" "}
              <Link className="active" to="./WatchPage" onClick={()=>{hideNav()}}>Watches </Link>
              
            </li>

            <li>
              {" "}
              <Link className="active" to="./Contact" onClick={()=>{hideNav()}}>Contact </Link>
              
            </li>
           

          <strong className="remove" onClick={()=>{hideNav()}} >
            {'x'}
            
          </strong>
          </ul>

          <div className="cartIconCarrier ">
            <div>
            <button className="contactUs">              <Link className="active1" to="./Contact" onClick={()=>{hideNav()}}>Contact us</Link>
</button>

            </div>
            <div className="cartIcon">
              <img src={cartIcon} alt="cartIcon" />
            </div>
          </div>
        </nav>
      </header>

      <div className="menu1">

                <div></div>
                <div></div>
                <div></div>
                
            </div>

           
    </div>
  );
};

export default NavBar;
