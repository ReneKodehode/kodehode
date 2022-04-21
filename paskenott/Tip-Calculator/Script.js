const billAmoune = document.querySelector("#billAmount");
const peopleAmount = document.querySelector("#peopleAmount");
const btn5 = document.querySelector("#btn5");
const btn10 = document.querySelector("#btn10");
const btn15 = document.querySelector("#btn15");
const btn25 = document.querySelector("#btn25");
const btn50 = document.querySelector("#btn50");
const costum = document.querySelector("#peopleAmount");

let selectedPercentage = "";
let costumPercentage = "";

document.querySelectorAll("button[name=percentage]").forEach
addEventListener((`change`),e => {
    if(e.target.name === "Cpercentage"){
        console.log(e.target.value);
    }
});


document.querySelectorAll("button[name=percentage]").forEach
    addEventListener(("click"),e => {
       switch (e.target.value) {
           case "5":
            ofAndOnButton(5)
            console.log(selectedPercentage);
            //style button on click
               break;
            case "10":
                ofAndOnButton(10)
                console.log(selectedPercentage);
               break;
            case "15":
                ofAndOnButton(15)
                console.log(selectedPercentage);
               break;
            case "25":
                ofAndOnButton(25)
                console.log(selectedPercentage);
               break;
            case "50":
                ofAndOnButton(50)
                console.log(selectedPercentage);
               break;
    
           default:
               break;
       }
    });

function ofAndOnButton(value){
    if(selectedPercentage === `${value}`){
        selectedPercentage = "";
        return
       }
       selectedPercentage = `${value}`;
}