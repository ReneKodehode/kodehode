import React from 'react'

function button({className, btnValue, onButtonClicked,onColor}) {
  return (
    <button 
        className={className}
        onClick = {() => onButtonClicked(btnValue)}
    >{btnValue}</button>
  )
  
}

export default button