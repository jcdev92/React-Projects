import React from "react";
import { useState } from "react";

const Cardusers = ({ userRandom, colorRandom, handleClick }) => {
  
  let textColorRandom = {
    color: colorRandom
  };
  
  return (

    <div className="cardusers" style={textColorRandom}>
      <div className="cardusers__header" style={{ backgroundColor: colorRandom }}>
          <img src={userRandom.picture.large} alt="avatar" />
          <h2>
            {userRandom.name.title} {userRandom.name.first}{" "}
            {userRandom.name.last}
          </h2>
      </div>
      <div className="cardusers__body">
        <spam> Email: {userRandom.email}</spam>
        <spam> Cell: {userRandom.cell}</spam>
        <spam> Age: {userRandom.dob.age}</spam>
        <spam> National: {userRandom.nat}</spam>
        <spam>
          {userRandom.location.street.number} {userRandom.location.street.name},{" "}
          {userRandom.location.city}, {userRandom.location.state}{" "}
          {userRandom.location.postcode}
        </spam>
      </div>
      <button className="cardusers__button" style={{ backgroundColor: colorRandom }}>
        <i class="fa-solid fa-shuffle" onClick={handleClick}></i>
      </button>
    </div>
  );
};

export default Cardusers;
