import React from 'react'

const Circle = ({toggleOffOn, onOff}) => {
  return (
    <div className="circle">
      <div className={`circle__${onOff}`}></div>
      <button onClick={toggleOffOn} className="btn">{onOff}</button>
    </div>
  )
}

export default Circle
