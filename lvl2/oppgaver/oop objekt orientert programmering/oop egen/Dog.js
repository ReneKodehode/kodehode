class Dog {


    //use # before variables to make them private.
    #name;
    #race;
    #gender;
    #color;

    constructor(name, race, gender, color) {
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.color = color;
    }

    //get
    getName() {
        return this.name;
    }

    //set
    setName(newname) {
        this.name = newname;
    }

    //method
    printWholeDog() {
        console.log(this.name + this.race + this.gender + this.color + this.dogTag);
    }

}