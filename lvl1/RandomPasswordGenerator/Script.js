let inputEl = document.getElementById("inputEl");
let passwordEl1 = document.getElementById("passwordEl1");
let passwordEl2 = document.getElementById("passwordEl2");
let passwordEl3 = document.getElementById("passwordEl3");
let passwordEl4 = document.getElementById("passwordEl4");

let alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
let alphabetHigher = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["!", "¨", "#", "¤", "%", "&", "/", "(", ")", "=", "?", ",", ".", "-", "<", ">", "-", "_", "|", "@", "£", "$", "€", "{", "[", "]", "}", "]"]

//first inits
generateNewPasswords()

function generateNewPasswords() {
    passwordEl1.textContent = generateNewPassword();
    passwordEl2.textContent = generateNewPassword();
    passwordEl3.textContent = generateNewPassword();
    passwordEl4.textContent = generateNewPassword();

}

function generateNewCharacter() {
    let nextRandom = Math.floor(Math.random() * 4);
    if (nextRandom === 0) {
        return alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
    }
    else if (nextRandom === 1) {
        return alphabetHigher[Math.floor(Math.random() * alphabetHigher.length)];
    }
    else if (nextRandom === 2) {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    else {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

}

function generateNewPassword() {
    let password = ""

    for (let i = 0; i < inputEl.value; i++) {
        password += (generateNewCharacter());
    }
    return password;
}