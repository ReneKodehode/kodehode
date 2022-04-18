import React from 'react'

function input({ className, onThemechange, inpValue}) {
  return (
    <input
    className={className}
    value={inpValue}
    onChange= {(e) => onThemechange(e.target.value)}
    //onLoad = {(e) => onThemechange(e.target.value)}
    type="range" 
    min="1" 
    max="3"
    ></input>
  )
}

export default input