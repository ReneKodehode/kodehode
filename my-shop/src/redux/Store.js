import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/landingPage/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
