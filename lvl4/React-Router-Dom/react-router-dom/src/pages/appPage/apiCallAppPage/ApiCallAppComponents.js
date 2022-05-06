import React from "react";

export const button = ({ className, btnText, onButtonClicked, isHidden }) => {
  return (
    <button className={className} onClick={() => onButtonClicked(btnText)}>
      {btnText}
    </button>
  );
};
