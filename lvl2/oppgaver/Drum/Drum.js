/*
class Drum: holds the filepath to the sound as file. defines the key that is to be pushed to make the sound as key. 
Passes the file to super.src to build up the complete filepath.
the div holds the html element that is connected to the sound for visuals.
extends: Audio object to get the functions and take a src.
*/

class Drum extends Audio {
    div;

    constructor(file, key) {
        super();
        super.src = `./DrumSounds/${file}.wav`;
        this.key = key;
        this.file = file;
    }


    setDiv(div) {
        this.div = div;
    }
}