import React from 'react'

const Quote = ({quoteRandom, colorRandom}) => {

    let txtColor = {
        color: colorRandom
    }

  return (
    <span className="quotespan" style={txtColor}>{quoteRandom.quote} <br></br><br></br> {quoteRandom.author}</span>
  )
}

export default Quote