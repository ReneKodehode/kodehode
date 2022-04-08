//solution 1: OOP

//get the key that is pushed down and do stuff.
document.body.addEventListener("keydown", e => {
    for (const drum of drums) {
        if (e.code === drum.key) {

            // style the div in the object on press.
            divStylerOnPress(drum);

            //play sound
            drum.play();

            //reset transition on keyup
            document.body.addEventListener("keyup", function () {
                drum.div.classList.remove("play");
            });

        }

    }
})

//create new objects.
const Clap = new Drum("clap", "KeyQ");
const Hihat = new Drum("hihat", "KeyW");
const Kick = new Drum("kick", "KeyE");
const Openhat = new Drum("openhat", "KeyR");
const Ride = new Drum("ride", "KeyA");
const Snare = new Drum("snare", "KeyS");
const Tink = new Drum("tink", "KeyD");
const Tom = new Drum("tom", "KeyF");

//put objects in the array drums.
//drums: an array of drum objects (see Drum.js)
let drums = [];
drums.push(Clap);
drums.push(Hihat);
drums.push(Kick);
drums.push(Openhat);
drums.push(Ride);
drums.push(Snare);
drums.push(Tink);
drums.push(Tom);

//add the div in the object to the transition css class.
function divStylerOnPress(drum) {
    drum.div.classList.add("play");
    drum.currentTime = 0;
    drum.div.style.transition = "all";
    drum.div.style.transition.duration = drum.currentTime;
}

//loop trough the drum array and add div to the selected object.
for (let drum of drums) {
    addDivFromObjects(drum);
}

//crate a new div and text. append to the container. add css to div. set the div to the object for future reference.
function addDivFromObjects(drum) {
    let newDiv = document.createElement("div")
    let text = document.createTextNode(drum.file + drum.key);
    newDiv.appendChild(text);
    newDiv.classList.add("child");
    document.querySelector(".container").appendChild(newDiv);
    drum.setDiv(newDiv);
}


//solution 2: fp

//get the key that os pushed down
document.body.addEventListener("keydown", e => {
    console.log(e.code);
    // play(e);
})

//add new sound to object audio.
const AudioClap = new Audio("./DrumSounds/clap.wav");
const AudioHihat = new Audio("./DrumSounds/hihat.wav");
const AudioKick = new Audio("./DrumSounds/kick.wav");
const AudioOpenhat = new Audio("./DrumSounds/openhat.wav");
const AudioRide = new Audio("./DrumSounds/ride.wav");
const AudioSnare = new Audio("./DrumSounds/snare.wav");
const AudioTink = new Audio("./DrumSounds/tink.wav");
const AudioTom = new Audio("./DrumSounds/tom.wav");

//switch case to switch between the different keys use.
function play(e) {
    switch (e.code) {
        case "KeyQ":
            AudioClap.currentTime = 0;
            AudioClap.play();
            break;
        case "KeyW":
            AudioHihat.play();
            break;
        case "KeyE":
            AudioKick.play();
            break;
        case "KeyR":
            AudioOpenhat.play();
            break;
        case "KeyA":
            AudioRide.play();
            break;
        case "KeyS":
            AudioSnare.play();
            break;
        case "KeyD":
            AudioTink.play();
            break;
        case "KeyF":
            AudioTom.play();
            break;
    }

}