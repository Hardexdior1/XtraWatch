import React, { useEffect } from "react";
import "../Styles/Section4.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data2 from "../Components/Data2";
import Watches from "../Components/WatchData";
import { useParams } from "react-router-dom";
import "../Styles/WatchInfo.css";
const WatchInfo = ({ addToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  // const {id2}=useParams()

  const data = Data2.find((item) => item.id == id);
  const watch = Watches.find((item) => item.id == id);

  return (
    <div className="infoWrap">
      {data ? (
        <div className="flexInfo">
          <div className="infoImg">
            <img src={data.img} alt="" />
          </div>

          <div className="infoText">
            <h2 className="w-name">{data.name}</h2>

            <div className="rate">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="infoPrice"> ${data.price} </p>

            <p className="texts">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>

           
        
             <button
                onClick={() => {
                  addToCart(data);
                }}>
             
                Add to cart{" "}
              </button>
           
         
          </div>
        </div>
      ) : (
        ""
      )}

      {watch ? (
        <div className="flexInfo">
        <div className="infoImg">
          <img src={watch.img} alt="" />
        </div>

        <div className="infoText">
          <h2 className="w-name">{watch.name}</h2>

          <div className="rate">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="infoPrice"> ${watch.price} </p>

          <p className="texts">
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
            vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
          </p>

         
      
           <button
              onClick={() => {
                addToCart(watch);
              }}>
           
              Add to cart{" "}
            </button>
         
       
        </div>
      </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WatchInfo;
