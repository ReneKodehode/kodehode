import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledContentDiv,
  StyledOutputText,
} from "./IncrementApp/IncremenetAppStyle";

export default function AppPage() {
  const [counter, setCounter] = useState(200);
  const [isShowApp, setIsShowApp] = useState(0);

  //useEffect do every time the state counter changes
  useEffect(() => {
    if (localStorage.getItem("counter")) {
      setCounter(localStorage.getItem("counter"));
    }
  }, [counter]);

  const buttonClicked = (btnText) => {
    switch (btnText) {
      case "Increment":
        setCounter(parseInt(counter) + 1);
        localStorage.setItem("counter", parseInt(counter) + 1);
        break;
      case "Decrement":
        setCounter(parseInt(counter) - 1);
        localStorage.setItem("counter", parseInt(counter) - 1);
        break;
      case "Show app":
        setIsShowApp(1);
        break;
    }
  };

  if (isShowApp) {
    return (
      <StyledContentDiv>
        <StyledButton
          btnText={"Increment"}
          backgroundColor={"green"}
          onButtonClicked={buttonClicked}
        ></StyledButton>
        <StyledButton
          btnText={"Decrement"}
          backgroundColor={"red"}
          onButtonClicked={buttonClicked}
        ></StyledButton>
        <StyledOutputText text={counter}></StyledOutputText>
      </StyledContentDiv>
    );
  } else {
    return (
      <StyledContentDiv>
        <StyledButton
          btnText={"Show app"}
          backgroundColor={"blue"}
          onButtonClicked={buttonClicked}
        ></StyledButton>
      </StyledContentDiv>
    );
  }
}
