//constructor
function Dog(name, species, age, gender) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.gender = gender;
    this.getSummary = function() {
        return `${this.name} er hundens navn. ${this.species} er rasen, og er en ${ this.age }
år gammel ${ this.gender }`;
    };
}
const dog1 = new Dog("Bonzo", "Fortausblanding", "3", "tispe");
console.log(dog1.getSummary());
dog1.name = "Per"
console.log(dog1.getSummary());
dog1.age = 2;
//console.log(dog1.age);
//console.log(dog1.getSummary());
const dog2 = new Dog("Fido", "puddel", "5", "hannkjønn")
console.log(dog2.getSummary())