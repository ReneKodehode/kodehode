import React from "react";
import { decrement, increment } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";

export const DecrementButton = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrement())} className={className}>
      Decrement
    </button>
  );
};

export const IncrementButton = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment())} className={className}>
      Increment
    </button>
  );
};

export const Label = ({ className }) => {
  const count = useSelector((state) => state.counter.value);
  return <label className={className}>{count}</label>;
};
