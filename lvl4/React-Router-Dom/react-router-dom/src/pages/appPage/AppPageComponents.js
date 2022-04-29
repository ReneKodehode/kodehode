import React from 'react'

export const button = ({className, btnText, onButtonClicked, isHidden}) => {
  return (
    <button
        className={className}
        onClick = {() => onButtonClicked(btnText)}
    >{btnText}</button>
  ) 
}

export const outputText = ({className, text}) => {
  return (
    <h2
        className={className}
    >{text}</h2>
  ) 
}