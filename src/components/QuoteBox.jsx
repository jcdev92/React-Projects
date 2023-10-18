import React from 'react'
import Quote from './Quote'

const QuoteBox = ({handleClick, colorRandom, quoteRandom}) => {
    let txtColor = {
        color: colorRandom
      }
  return (
    <div className="quotebox">
        <i class="fa-solid fa-quote-left" style={txtColor}></i>
        <Quote quoteRandom={quoteRandom} colorRandom={colorRandom}/>        
    <button className="quotebox__button" onClick={handleClick}>
        <i className="fa fa-refresh" style={txtColor}></i>
    </button>
    </div>
  )
}

export default QuoteBox