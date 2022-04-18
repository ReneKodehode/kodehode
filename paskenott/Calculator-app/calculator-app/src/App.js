import { AppContainer } from "./styles/Container.style"
import { useState } from "react";
import { useEffect } from "react";
import { StyledH1 } from "./styles/H1.style";
import { StyledHeader } from "./styles/Header.style";
import { StyledInput } from "./styles/Input.style";
import { GlobalStyle } from "./styles/GlobalStyles";
import { StyledButton } from "./styles/Button.style";
import { StyledSumContainer } from "./styles/SumContainer.style";
import { StyledButtonContainer } from "./styles/ButtonContainer.style";
import { StyledSumText } from "./styles/SumText.style";
import { StyledText } from "./styles/Text.style";

function App() {  
  const [defaultTheme, setDefaultTheme] = useState("1","2","3");
  const [mainBackground, setMainBackground] = useState();
  const [ToggleBackground, setToggleBackground] = useState();
  const [keypadBackground, setKeypadBackground] = useState();
  const [screenBackground, setScreenBackground] = useState();
  const [delAndResetBackground, setDelAndResetBackground] = useState();
  const [delAndResetShadow, setDelAndResetShadow] = useState();
  const [equalBackground, setEqualBackground] = useState();
  const [toggleDotColor, setToggleDotColor] = useState();
  const [equalKeyShadow, setEqualKeyShadow] = useState();
  const [buttonBackground, setButtonBackground] = useState();
  const [buttonShaddow, setButtonShaddow] = useState();
  const [coloredText, setColoredText] = useState();
  const [whiteText, setWhiteText] = useState();
  const [resetAndDelText, setResetAndDelText] = useState();
  const [displayText, setDisplayText] = useState();

  let [calc, setCalc] = useState({
    chosenOperator: "",
    num1: "",
    num2: "",
    sum: "",
  });
  
  //set defaultTheme
  useEffect(() => {
    console.log("useEffect");
    if(localStorage.getItem("defaultTheme")){
      ThemeChanger(localStorage.getItem("defaultTheme"))
    }
    else {
    ThemeChanger(defaultTheme);
    }
  }, [""]);

  

  const buttonClicked = (btnValue) => {

    console.log(btnValue);
    switch (btnValue) {
      case 1:
        numberChosen(1);
        break;
    case 2:
        numberChosen(2);
        break;
    case 3:
        numberChosen(3);
        break;
    case 4:
        numberChosen(4);
        break;
    case 5:
        numberChosen(5);
        break;
    case 6:
        numberChosen(6);
        break;
    case 7:
        numberChosen(7);
        break;
    case 8:
        numberChosen(8);
        break;
    case 9:
        numberChosen(9);
        break;
    case 0:
        numberChosen(0);
        break;
    case "+":
        calc.chosenOperator = "+";
        changeDisplayText(calc.chosenOperator);
        break;
    case "-":
      calc.chosenOperator = "-";
      changeDisplayText(calc.chosenOperator);
        break;
    case "x":
      calc.chosenOperator = "*";
      changeDisplayText(calc.chosenOperator);
        break;
    case "/":
      calc.chosenOperator = "/";
      changeDisplayText(calc.chosenOperator);
        break;
    case ".":
      numberChosen(".");
        break;
    case "DEL":
      if (!calc.chosenOperator){
        calc.num1 = calc.num1.slice(0,-1);
        console.log("ding " + calc.num1);
        changeDisplayText(calc.num1);
      }
      else{
        calc.num2 = calc.num2.slice(0,-1);
        changeDisplayText(calc.num2);
      }
        break;
    case "RESET":
      resetCalc();
      changeDisplayText(calc.num1);
        break;
    case "=":
      calc.sum = calculate(parseFloat(calc.num1),parseFloat(calc.num2), calc.chosenOperator)
      changeDisplayText(calc.sum);
      resetCalc()
        break;

      default:
        break;
    }
  }
  function resetCalc(){
      calc.chosenOperator = "";
      calc.num1 = "";
      calc.num2 = "";
      calc.sum = "";
  }

  function numberChosen(number){
    if (!calc.chosenOperator){
      calc.num1 += number;
      console.log("ding " + calc.num1);
      changeDisplayText(calc.num1);
    }
    else{
      calc.num2 += number;
      changeDisplayText(calc.num2);
    }
  }
  function calculate(firsNumber, secondNumber, currentOperator) {
    let sum = 0;
    switch (currentOperator) {
        case (currentOperator = "+"):
            sum = firsNumber + secondNumber;
            break;
        case (currentOperator = "-"):
            sum = firsNumber - secondNumber;
            break;
        case (currentOperator = "*"):
            sum = firsNumber * secondNumber;
            break;
        case (currentOperator = "/"):
            sum = firsNumber / secondNumber;
        default:
            break;
    }
    return sum;
  }
  const ThemeChanger = (theme) => {
    switch (theme) {
      case "1":

        changeDefaultTheme("1");
        changeMainBackground("hsl(222, 26%, 31%)");
        changeToggleBackground("hsl(223, 31%, 20%)");
        changeKeypadBackground("hsl(223, 31%, 20%)");
        changeScreenBackground("hsl(224, 36%, 15%)");
        changeDelAndResetBackground("hsl(225, 21%, 49%)");
        changeDelAndResetShadow("hsl(224, 28%, 35%)");
        changeEqualBackground("hsl(6, 63%, 50%)");
        changeToggleDotColor("hsl(6, 63%, 50%)");
        changeEqualKeyShadow("hsl(6, 70%, 34%)");
        changeButtonBackground("hsl(30, 25%, 89%)");
        changeButtonShaddow("hsl(28, 16%, 65%)");
        changeColoredText("hsl(221, 14%, 31%)");
        changeWhiteText("white");
        changeResetAndDelText("hsl(0, 0, 100%)");

        
        console.log("theme1");
        break;

      case "2":
        
        changeDefaultTheme("2");
        changeMainBackground("hsl(0, 0%, 90%)");
        changeToggleBackground("hsl(0, 5%, 81%)");
        changeKeypadBackground("hsl(0, 5%, 81%)");
        changeScreenBackground("hsl(0, 0%, 93%)");
        changeDelAndResetBackground("hsl(185, 42%, 37%)");
        changeDelAndResetShadow("hsl(185, 58%, 25%)");
        changeEqualBackground("hsl(25, 98%, 40%)");
        changeToggleDotColor("hsl(25, 98%, 40%)");
        changeEqualKeyShadow("hsl(25, 99%, 27%)");
        changeButtonBackground("hsl(45, 7%, 89%)");
        changeButtonShaddow("hsl(35, 11%, 61%)");
        changeColoredText("hsl(60, 10%, 19%)");
        changeWhiteText("hsl(60, 10%, 19%)");
        changeResetAndDelText("hsl(0, 0, 100%)");

        console.log("theme2");
        break;

      case "3":
        
        changeDefaultTheme("3");
        changeMainBackground("hsl(268, 75%, 9%)");
        changeToggleBackground("hsl(268, 71%, 12%)");
        changeKeypadBackground("hsl(268, 71%, 12%)");
        changeScreenBackground("hsl(268, 71%, 12%)");
        changeDelAndResetBackground("hsl(281, 89%, 26%)");
        changeDelAndResetShadow("hsl(285, 91%, 52%)");
        changeEqualBackground("hsl(176, 100%, 44%)");
        changeToggleDotColor("hsl(176, 100%, 44%)");
        changeEqualKeyShadow("hsl(177, 92%, 70%)");
        changeButtonBackground("hsl(268, 47%, 21%)");
        changeButtonShaddow("hsl(290, 70%, 36%)");
        changeColoredText("hsl(52, 100%, 62%)");
        changeWhiteText("hsl(52, 100%, 62%)");
        changeResetAndDelText("hsl(0, 0, 100%)");

        console.log("theme3");
        break;
      default:
        break;
    }
  }
  
  const changeDefaultTheme = (DefaultTheme) => {
    setDefaultTheme(DefaultTheme);

    localStorage.setItem("defaultTheme", DefaultTheme);
    console.log(DefaultTheme);
  };
  const changeMainBackground = (MainBackground) => {
    setMainBackground(MainBackground);
  };
  const changeToggleBackground = (ToggleBackground) => {
    setToggleBackground(ToggleBackground);
  };
  const changeKeypadBackground = (KeypadBackground) => {
    setKeypadBackground(KeypadBackground);
  };
  const changeScreenBackground = (ScreenBackground) => {
    setScreenBackground(ScreenBackground);
  };
  const changeDelAndResetBackground = (delAndResetBackground) => {
    setDelAndResetBackground(delAndResetBackground);
  };
  const changeDelAndResetShadow = (delAndResetShadow) => {
    setDelAndResetShadow(delAndResetShadow);
  };
  const changeEqualBackground = (equalBackground) => {
    setEqualBackground(equalBackground);
  };
  const changeToggleDotColor = (toggleDotColor) => {
    setToggleDotColor(toggleDotColor);
  };
  const changeEqualKeyShadow = (equalKeyShadow) => {
    setEqualKeyShadow(equalKeyShadow);
  };
  const changeButtonBackground = (buttonBackground) => {
    setButtonBackground(buttonBackground);
  };
  const changeButtonShaddow = (buttonShaddow) => {
    setButtonShaddow(buttonShaddow);
  };
  const changeColoredText = (ColoredText) => {
    setColoredText(ColoredText);
  };
  const changeWhiteText = (whiteText) => {
    setWhiteText(whiteText);
  };
  const changeResetAndDelText = (resetAndDelText) => {
    setResetAndDelText(resetAndDelText);
  };
  const changeDisplayText = (DisplayText) => {
    setDisplayText(DisplayText);
  };
  const ChangeCalc =(operator,num1,num2) => {
    setCalc({
      chosenOperator: "",
      num1: 0,
      num2: 0,
    });
  }


  
 


  return (
    <AppContainer>
     <GlobalStyle backgroundColor={mainBackground}/>
      <StyledHeader>
        <StyledH1 color={whiteText}>calc</StyledH1>
        <StyledText style={{marginTop:"34px"}} color={whiteText}>THEME</StyledText>
          <div>
          <div style={{display:"flex", justifyContent:"space-around"}}><StyledText color={whiteText}>1</StyledText><StyledText color={whiteText}>2</StyledText><StyledText color={whiteText}>3</StyledText></div>
            <StyledInput onThemechange={ThemeChanger} inpValue={defaultTheme} boxShadow={toggleDotColor} backgroundColor={ToggleBackground}></StyledInput>
          </div>
      </StyledHeader>

      <StyledSumContainer backgroundColor={screenBackground}>
        <StyledSumText sumText={displayText}  color={whiteText}></StyledSumText>
      </StyledSumContainer>

      <StyledButtonContainer backgroundColor={keypadBackground}>
      <StyledButton btnValue={7} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground} boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={8} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={9} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={"DEL"} onButtonClicked={buttonClicked} color={resetAndDelText} backgroundColor={delAndResetBackground}  boxShadow={delAndResetShadow}></StyledButton> <br></br>
      <StyledButton btnValue={4} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={5} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={6} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={"+"} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton> <br></br>
      <StyledButton btnValue={1} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={2} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={3} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={"-"} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton> <br></br>
      <StyledButton btnValue={"."} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={0} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={"/"} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton>
      <StyledButton btnValue={"x"} onButtonClicked={buttonClicked} color={coloredText} backgroundColor={buttonBackground}  boxShadow={buttonShaddow}></StyledButton> <br></br>
      <StyledButton btnValue={"RESET"}  onButtonClicked={buttonClicked} color={resetAndDelText} backgroundColor={delAndResetBackground}  boxShadow={delAndResetShadow} ></StyledButton>
      <StyledButton btnValue={"="} onButtonClicked={buttonClicked} color={whiteText} backgroundColor={equalBackground}  boxShadow={equalKeyShadow}></StyledButton>
      </StyledButtonContainer>
    </AppContainer>
  );
}

export default App;
