
//Methodically looping
//1. sjekk om en lengre tekst du finner på nettet er over en wordcount (antall tegn) du velger selv.

//https://www.lipsum.com/
let LongText = `Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;
let checkLength = 100;
if (LongText.length <= checkLength) {
    console.log("text is longer than: " + checkLength + " words");
}
//2. lag en loop som teller til 10
const sometext = "hello this is a text";
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

//3. finn ordene "if", "as", "and" i teksten du valgte og kutt ut de ordene pluss 5 tegn på hver side av ordene. Det trengs bare første instance av ordene.

//check if the text has the keywords "if","and","as" in it, split the text to an array with " " as selector, itterate trough the array to make a sentence if index of first itereate is a keyword iterate again to get the first 5 words from the keyword and the last 5 words after the keyword. 
let arrayOfLongText = [];
let newSentences = [];
//console.log(LongText.indexOf("if"));
//console.log(LongText.indexOf("and"));
//console.log(LongText.indexOf("as"));
if (LongText.indexOf("if") > 0 || LongText.indexOf("and") > 0 || LongText.indexOf("as") > 0) {
    const arrayOfLongText = LongText.split(" ");
    //console.log(arrayOfLongText);
    for (let x = 0; x < arrayOfLongText.length; x++) {
        //console.log(arrayOfLongText[keyWord]);
        sentence = "";
        if (arrayOfLongText[x] === "if" || arrayOfLongText[x] === "and" || arrayOfLongText[x] === "as") {
            //console.log(arrayOfLongText[x])
            for (let i = -5; i <= 5; i++) {
                //console.log(arrayOfLongText[x + i]);
                sentence += " " + (arrayOfLongText[x + i]);
            }
        }
        newSentences.push(sentence);
    }
}

//4. sett sammen de nye stringene dine.
for (let sentence in newSentences) [
    console.log(newSentences[sentence])
]
//5. bytt ut de ordene med norske ord.

console.log("seg selv, som søker etter det og vil ha det, rett og slett");
console.log("dummy tekst fra trykkeri- og setteindustrien. Lorem Ipsum har");
console.log("tok en bysse av typen og krypte den for å lage en");
console.log("ark som inneholder Lorem Ipsum-passasjer, og mer nylig med desktop publishing");
console.log("mer eller mindre normal fordeling av bokstaver, i motsetning til å bruke 'Innhold her");
console.log("Engelsk. Mange desktop publishing-pakker og nettsideredigerere bruker nå");
console.log("redaktører bruker nå Lorem Ipsum som standard modelltekst, og");
console.log("som standard modelltekst, og et søk etter 'lorem ipsum'");
console.log("noen ganger med vilje (injisert humor og lignende). Hvor gjør det");
console.log("fra en Lorem Ipsum-passasje, og går gjennom sitatene til");
console.log("Ipsum kommer fra seksjonene 1.10.32 og 1.10.33 i de 'Finibus Bonorum'");
console.log("Malorum ' (The Extremes of Good and Evil) av Cicero, skrevet i");
console.log("for de interesserte. Avsnitt 1.10.32 og 1.10.33 fra 'de Finibus Bonorum");
console.log("har en tendens til å gjenta forhåndsdefinerte biter etter behov, noe som gjør dette til det første");

//6. lag et lite spill hvor spilleren har 3 liv. Hint: while loops
let playerHealth = 3;
let PlayerIsAlive = true;
console.log("Game Started");
while (playerHealth > 0) {
    playerHealth--
    console.log("playerHealth = " + playerHealth);
}
if (playerHealth === 0) {
    console.log("Player dead!!");
    PlayerIsAlive = false;
}

//7. lag en array med 10 ord og en med 10 tall.
let wordArray = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//8. sett alle tallene utenom det første og siste til å være det samme tallet et tall om gangen
console.log("number array = " + numberArray);
//numberArray.shift();
//numberArray.pop();
console.log("number array = " + numberArray);
for (let number in numberArray) {
    console.log(number);
    if (number == 0 || number == numberArray.length - 1) {

    }
    else {
        numberArray[number] = 37;
    }
}
console.log("number array = " + numberArray);