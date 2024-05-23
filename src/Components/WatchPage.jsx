import React, { useEffect, useState } from "react";
import Watches from "./Watches";
import Data2 from "./Data2";
import "../Styles/Section4.css";

const WatchPage = ({ addToCart,  increase,storage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState(Data2);

  const [productLength, setProductLength] = useState(
    Data2.length + " Watches available "
  );

  const all = () => {
    setData(Data2);
    setProductLength(Data2.length + " Watches available ");
  };
  const sport = () => {
    let sport = Data2.filter((item) => item.category == "sport");
    setData(sport);
    setProductLength(sport.length + " Watches found ");
  };
  const summer = () => {
    let summer = Data2.filter((item) => item.category == "summer");
    setProductLength(summer.length + " Watches found ");

    setData(summer);
  };
  const event = () => {
    let event = Data2.filter((item) => item.category == "event");
    setProductLength(event.length + " Watches found ");

    setData(event);
  };

  const filter = (category) => {
    if (category == "all") {
      setData(Data2);
      setProductLength(Data2.length + "  Watches available");

      return;
    }

    const newItems = Data2.filter((item) => item.category == category);
    setData(newItems);
    setProductLength(newItems.length + " Watches found ");
  };

  return (
    <div>
      <div className="watchPad">
        <div className="categoryAndLengthWrap">
          <div>
            <h4>{productLength} </h4>
          </div>
          <div className="categoryWrap">

            <select
              onClick={(event) => {
                filter(event.target.value);
              }}>
              <option value="all">All</option>

              <option value="event">Event Watch</option>
              <option value="sport">Sport Watch</option>
              <option value="summer">Summer Watch</option>
            </select>
          </div>
        </div>

        <div className="watchFlex watchFlex1" id="test">
          {/* <h1>{data.length}</h1> */}

          {data.map((eachData) => {
            return (
              <Watches
              increase={()=>increase(eachData)}

                key={eachData.id}
                storage={storage}
                {...eachData}
                addToCart={() => addToCart(eachData)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
