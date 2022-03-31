let envelope = document.getElementById("envelope");
let leftSide = document.getElementById("left-side");
let rightSide = document.getElementById("right-side");


envelope.addEventListener("click", openLetter)

let animationDelay = 5;

let isOpen = false;

function openLetter() {
    if (isOpen === false) {
        console.log("hello");
        leftSide.style.transform = "translate(-50%)";
        //leftSide.style.transition = "all " + animationDelay + "s"

        rightSide.style.transform = "translate(50%)";
        //rightSide.style.transition = "all " + animationDelay + "s"
        isOpen = true;
    }
    else if (isOpen === true) {
        console.log("Goodbye");
        leftSide.style.transform = "translate(0%)";
        //leftSide.style.transition = "all " + animationDelay + "s";

        rightSide.style.transform = "translate(0%, 50%)";
        //rightSide.style.transition = "all " + animationDelay + "s"
        isOpen = false;
    }
}