import React, { useState } from "react";
import { Link } from "react-router-dom";

const UnControlledExample = ({ name, showAbout,link}) => {
  const [about, setAbout] = useState(false);
  return (
    <div>
      <div
        className="eachTest"
        onMouseLeave={() => {
          setAbout(false);
        }}
        onMouseEnter={() => {
          setAbout(true);
        }}>
        <h4>{name}</h4>
       
        {about ? (
          <div className="aboutWatch">
            <h1>ABout {name}</h1>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <Link to={link}>{name}</Link> */}
    </div>
  );
};

export default UnControlledExample;
