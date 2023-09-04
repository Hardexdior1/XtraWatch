import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, SetPassword] = useState("");
  const [surName, setSurName] = useState("");
  const [new1,setNew1]=useState('');

  return (
    <div>
      
      <div className="login-div">
        {/* <button onClick={()=>{
          
        }}>{setSome}</button> */}
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const userDetails = {
              name: username,
              password: password,
              surName: surName,
            };
            // if (password.length > 5) {
            //   console.log(userDetails);
            // } else {
            //   alert("password length is too low");
            // }
          }}>

          <h3 className="welcomeBack">Welcome Back</h3>
         
          <input
            onChange={(event) => {
              {
                console.log(event.target.value);
                setUserName(event.target.value);
              }
            }}
            type="text"
            placeholder="Username"
          />{" "} <br /> <br />
          <input type="text" onChange={(event)=>{
            {
              console.log(event.target.value);
              setSurName(event.target.value);
            }

          }}placeholder="Surname" />
          <br /> <br />
          <input
            onChange={(event) => {
              console.log(event.target.value);
              SetPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <br />
          <input id="check" type="checkbox" /> &nbsp;
          <label htmlFor="check">remember Password</label> &nbsp;{" "}
          <Link className="forgot-link" to="/Welcome">
            Forgot Password?
          </Link>{" "}
          <br /> <br />
          {/* <input className='check' type="checkbox" /> &nbsp; <span>hi</span> */}
          <button className="login-link">Log In </button>
          <br /> <br />
          <span>New User ? </span> &nbsp;{" "}
          <Link className="get-started-link" to="/Getstarted">
            Click here
          </Link>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
