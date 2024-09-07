import React from 'react'
import '../styles/Buttons.css'

function Buttons() {
  const buttonValues = [
    '*', '/', '+', '-',
    'AC', '%', '9', '8',
    '7', '6', '5', '4',
    '3', '2', '1', '.',
    '0', "="
  ]

  const handleClick = (value) => {
    return value
  }

  return (
    <div className="button-container">
      {buttonValues.map((value, index) => (
        <button
          key={index}
          className={`button ${value === '=' ? 'equals' : ''}`}
          onClick={() => handleClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default Buttons