////////////////////////////////ES6///////////////////////////////////////////////
(function() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    // constructor(name){
    //     super(name)
    // }
    bark() {
      return `Dog ${this.name} is barking`;
    }
  }
  let Doggy = new Dog("Barky");
  console.log(Doggy.getName() === "Barky");
  console.log(Doggy.bark() === "Dog Barky is barking");
})();

////////////////////////////////ES6///////////////////////////////////////////////

////////////////////////////////ES5///////////////////////////////////////////////

function Animal(name) {
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  return `Dog ${this.name} is barking`;
};
const Barky = new Dog("Barky");
console.log(Barky.getName() === "Barky");
console.log(Barky.bark() === "Dog Barky is barking");

////////////////////////////////ES5///////////////////////////////////////////////
