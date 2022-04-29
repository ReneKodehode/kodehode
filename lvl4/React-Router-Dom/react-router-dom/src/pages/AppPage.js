import React, { useEffect, useState } from 'react'
import { StyledButton, StyledContentDiv, StyledOutputText} from './appPage/AppPageStyle'

export default function AppPage() {
 const [counter, setCounter] = useState();
 const [isShowApp, setIsShowApp] = useState(0);

 //useEffect do once on page load
  useEffect(() => {
    setCounter(200);
    }, [])

    //useEffect do everytime the state counter changes
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter])

    const buttonClicked = (btnText) => {
      switch (btnText) {
        case "Increment":
          setCounter(counter +1);
          break;
      case "Decrement":
          setCounter(counter -1);
          break;
      case "Show app":
        setIsShowApp(1);
          break;
      }
    }

if (isShowApp){
  return (
    <StyledContentDiv>
      <StyledButton btnText={"Increment"} backgroundColor={"green"} onButtonClicked={buttonClicked}></StyledButton>
      <StyledButton btnText={"Decrement"} backgroundColor={"red"} onButtonClicked={buttonClicked}></StyledButton>
      <StyledOutputText text={counter}></StyledOutputText>
    </StyledContentDiv>
  )}
else {
  return (
    <StyledContentDiv>
      <StyledButton btnText={"Show app"} backgroundColor={"blue"} onButtonClicked={buttonClicked}></StyledButton>
    </StyledContentDiv>
  )}
  
}
