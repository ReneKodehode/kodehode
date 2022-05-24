import React from "react";
import EmptyStar from "../../img/EmptyStar.svg";
import FilledStar from "../../img/FilledStar.svg";
import HalfFilledStar from "../../img/HalfFilledStar.svg";

export const checkedRating = ({ className }) => {
  return <img src={FilledStar} alt="Filled Star" className={className}></img>;
};

export const unCheckedRating = ({ className }) => {
  return <img src={EmptyStar} alt="Filled Star" className={className}></img>;
};

export const halfCheckedRating = ({ className }) => {
  return (
    <img src={HalfFilledStar} alt="Filled Star" className={className}></img>
  );
};
