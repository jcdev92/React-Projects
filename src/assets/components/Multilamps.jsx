import React from 'react'
import { useState } from "react";



const Multilamps = () => {

    const [turn, setTurn] = useState("off");

    const toggleOffOn = () => {
      if (turn === "off") {
        setTurn("on");
      } else {
        setTurn("off");
      }
    };
  
  return (
    <div className="circle">
    <div className={`circle__${turn}`}></div>
    <button onClick={toggleOffOn} className="btn">{turn}</button>
  </div>
  )
}

export default Multilamps