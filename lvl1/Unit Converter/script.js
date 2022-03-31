//Distance conversion
const MeterToFeet = 3.2808399;
const FeetToMeter = 0.3048;
//Volume conversion
const LiterToGallon = 0.2641720524;
const GallonToLiter = 3.78541178;
//Mass conversion
const KiloToPound = 2.20462262;
const PoundToKilo = 0.45359237;

//get input
let input = document.getElementById("input").value;
input = parseInt(input);

//get text
let textMeterToFeet = document.getElementById("meterToFeet");
let textLiterToGallon = document.getElementById("literToGallon");
let textKiloToPound = document.getElementById("kiloToPound");

//set variables for conversion
let convertedMeterToFeet = input * MeterToFeet;
let convertedFeetToMeter = input * FeetToMeter;
let convertedLiterToGallon = input * LiterToGallon;
let convertedGallonToLiter = input * GallonToLiter;
let convertedKiloToPound = input * KiloToPound;
let convertedPoundToKilo = input * PoundToKilo

//set default text
textMeterToFeet.textContent = "" + input + " Meter = " + convertedMeterToFeet + " | " + input + " Feet = " + convertedFeetToMeter;
//Example "20 meter = 65.616 feet | 20 feet = 6.069 meter"
textLiterToGallon.textContent = input + " Liter = " + convertedLiterToGallon + " | " + input + " Gallon = " + convertedGallonToLiter;
//Example "20 liters = 5.284 gallons | 20 gallons = 75.708 liters";
textKiloToPound.textContent = input + " Kilo = " + convertedKiloToPound + " | " + input + " Pound = " + convertedPoundToKilo;
//Example "20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos";
console.log("hello");


document.getElementById("input").addEventListener("input", change);

function change(e) {
    let input = e.target.value;
    input = parseInt(input);
    convertedMeterToFeet = input * MeterToFeet;
    convertedFeetToMeter = input * FeetToMeter;
    convertedLiterToGallon = input * LiterToGallon;
    convertedGallonToLiter = input * GallonToLiter;
    convertedKiloToPound = input * KiloToPound;
    convertedPoundToKilo = input * PoundToKilo;

    textMeterToFeet.textContent = input + " Meter = " + convertedMeterToFeet.toFixed(3) + " Feet" + " | " + input + " Feet = " + convertedFeetToMeter.toFixed(3) + " Meter";
    //Example "20 meter = 65.616 feet | 20 feet = 6.069 meter"
    textLiterToGallon.textContent = input + " Liter = " + convertedLiterToGallon.toFixed(3) + " Gallons" + " | " + input + " Gallon = " + convertedGallonToLiter.toFixed(3) + " Liter";
    //Example "20 liters = 5.284 gallons | 20 gallons = 75.708 liters";
    textKiloToPound.textContent = input + " Kilo = " + convertedKiloToPound.toFixed(3) + " Pound" + " | " + input + " Pound = " + convertedPoundToKilo.toFixed(3) + " Kilo";
}