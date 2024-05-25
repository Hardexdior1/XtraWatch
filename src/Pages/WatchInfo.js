import React, { useEffect } from "react";
import "../Styles/Section4.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data2 from "../Components/Data2";
import Watches from "../Components/WatchData";
import { useParams } from "react-router-dom";
const WatchInfo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const {id}=useParams()
// const {id2}=useParams()

const data=Data2.find((item)=>item.id==id)
const watch=Watches.find((item)=>item.id==id)

  
  return (
    <div>
    {data?  <div >
        <img src={data.img} alt="" />
        
      </div>:""}

    {watch?  <div >
        <img src={watch.img} alt="" />
        
      </div>:""}
    </div>
  );
};

export default WatchInfo;
