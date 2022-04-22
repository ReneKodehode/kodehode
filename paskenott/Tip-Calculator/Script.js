const billAmount = document.querySelector("#billAmount");
const peopleAmount = document.querySelector("#peopleAmount");
const totalPP = document.querySelector("#totalPP");
const tipPP = document.querySelector("#tipPP");

let selectedPercentage = "";


document.body.addEventListener((`change`), e => {
    if (e.target.name === "Cpercentage") {
        selectedPercentage = e.target.value;
        turnOFFStyle();
        calculateTip();
        
    }
});


document.querySelectorAll("button[name=percentage]").forEach
addEventListener(("click"), e => {
    turnOFFStyle();
    switch (e.target.value) {
        case "5":
            ofAndOnButton(5, e)
            calculateTip();
            break;
        case "10":
            ofAndOnButton(10, e)
            calculateTip();
            break;
        case "15":
            ofAndOnButton(15, e)
            calculateTip();
            break;
        case "25":
            ofAndOnButton(25, e)
            calculateTip();
            break;
        case "50":
            ofAndOnButton(50, e)
            calculateTip();
            break;

        default:
            break;
    }
});

function turnOFFStyle(){
    document.querySelectorAll('button').forEach((button) => {
        button.classList.remove("checked");
      });
}

function ofAndOnButton(value, e) {
    if (selectedPercentage === `${value}`) {
        selectedPercentage = "";
        return
    }
    e.target.classList.add("checked");
    selectedPercentage = `${value}`;
}

function calculateTip() {
    let bill = billAmount.value;
    let percentage = selectedPercentage / 100;
    let numberOfPeople = peopleAmount.value;

    let tipPerPerson = (bill * percentage / numberOfPeople);
    tipPP.textContent = tipPerPerson;
    console.log("tipPerPerson " + tipPerPerson);

    let totalPerPerson = (parseFloat(tipPerPerson) + parseFloat(bill));
    totalPP.textContent = totalPerPerson;
    console.log("totalPerPerson", totalPerPerson);
}