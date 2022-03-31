//class dog, specifies what a dog is.
//constructor is strict with all variables.
//Name: name of the dog.
//species: the race of the dog.
//age: age of the dog.
//gender: gender of the dog.
class Dog {
    constructor(name, species, age, gender) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.gender = gender;
    }
}
//create new instance of objects with expected parameters. 
const dog1 = new Dog("Fred", "labrador", "5", "male");
const dog2 = new Dog("Børre", "boxer", "2", "male");
const dog3 = new Dog("Laika", "Mongrel, possibly part-husky (or part-Samoyed) and part-terrier", "2-3", "female");

//save it to an array
let dogs = [];
dogs.push(dog1);
dogs.push(dog2);
dogs.push(dog3);

//loop trough dogs and console log the variables.
for (let dog of dogs) {
    console.log(`name: ${dog.name} species: ${dog.species} age: ${dog.age} gender: ${dog.gender} `);
}