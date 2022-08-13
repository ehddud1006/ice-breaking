import React, { useEffect, useState } from "react";
import "./BackCard.css";
const BackCard = ({ text, active }) => {
  return (
    <div>
      <div className="BackCardcontainer">
        <div className="heartContainer">
          <div className={active ? `heart fill-color` : `heart`}></div>
          <div
            // onClick={() => setActive(false)}
            className={active ? `animation-heart animation` : `animation-heart`}
          ></div>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default BackCard;
