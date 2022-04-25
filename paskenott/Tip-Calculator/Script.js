const billAmount = document.querySelector("#billAmount");
const peopleAmount = document.querySelector("#peopleAmount");
const totalPP = document.querySelector("#totalPP");
const tipPP = document.querySelector("#tipPP");
const cantBeZero = document.querySelector(".cantBeZero");
const costumPerc = document.querySelector(".costumPerc");

let selectedPercentage = "";

costumPerc.addEventListener(("click"), () => {
    turnOFFStyle()
});

document.body.addEventListener((`change`), e => {
    if (e.target.name === "Cpercentage") {
        selectedPercentage = e.target.value;
        calculateTip();
    }
    if (e.target.name === "billAmount"){
        calculateTip();
    }
    if (e.target.name === "peopleAmount"){
        calculateTip();
        console.log("here");
        console.log(e.target.value);
        if (e.target.value == 0){
            console.log("empty");
            cantBeZero.textContent = "Can't be zero";
        }
        else {
            console.log("note empty");
            cantBeZero.textContent = "";
        }
    }

});


document.querySelectorAll("button[name=percentage]").forEach
addEventListener(("click"), e => {
    switch (e.target.value) {
        case "5":
            turnOFFStyle()
            ofAndOnButton(e)
            calculateTip();
            break;
        case "10":
            turnOFFStyle()
            ofAndOnButton(e)
            calculateTip();
            break;
        case "15":
            turnOFFStyle()
            ofAndOnButton(e)
            calculateTip();
            break;
        case "25":
            turnOFFStyle()
            ofAndOnButton(e)
            calculateTip();
            break;
        case "50":
            turnOFFStyle()
            ofAndOnButton(e)
            calculateTip();
            break;
            

        default:
            break;
    }
});

function turnOFFStyle(){
    document.querySelectorAll('button').forEach((button) => {
        button.classList.remove("checked");  
        costumPerc.value = "";   
      });
}

function ofAndOnButton(e) {
    if (selectedPercentage === `${e.target.value}`) {
        selectedPercentage = "";
        return
    }
    e.target.classList.add("checked");
    selectedPercentage = `${e.target.value}`;
}

function calculateTip() {
    let bill = billAmount.value;
    let percentage = selectedPercentage / 100;
    let numberOfPeople = peopleAmount.value;

    let tipPerPerson = (bill * percentage / numberOfPeople);
    tipPP.textContent = tipPerPerson.toFixed(3);
    console.log("tipPerPerson " + tipPerPerson);

    let totalPerPerson = (parseFloat(tipPerPerson) + parseFloat(bill)/numberOfPeople);
    totalPP.textContent = totalPerPerson.toFixed(3);
    console.log("totalPerPerson", totalPerPerson);
}