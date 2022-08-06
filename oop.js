// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "silver";
  }

  say(newPhrase) {
    this.string = "*~* " + newPhrase + " *~*";
  }
};

var uni1 = new Unicorn("Charlie");
uni1.say("Howdy-Ho");
console.log(uni1);

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name) {
    this.name = name;
    this.pet = "bat";
    this.thirst = true
  }

  changePet(newPet) {
    this.pet = newPet;
  }

  notThirsty() {
    this.thirst = false;
  }
};

var vamp1 = new Vampire("Down-Bad Vlad");
vamp1.changePet("William");
vamp1.notThirsty();
console.log(vamp1);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon {
  constructor(name) {
    this.name = name;
    this.isHungry = true;
  }

  changeRider(rider) {
    this.rider = rider;
  }

  changeColor(color) {
    this.color = color;
  }

  eat(meals) {
    if (meals >= 4) {
      this.isHungry = false;
    }
  }
};

var dragon1 = new Dragon("Jeffrey");
dragon1.changeRider("Jeb");
dragon1.changeColor("jade");
dragon1.eat(5);
console.log(dragon1);

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.isAdult = false;
    if (this.age >= 33) {
      this.isAdult = true;
    }
    this.isOld = false;
    if (this.age >= 101) {
      this.isOld = true;
    }
    this.hasRing = false;
    if (name === "Frodo") {
      this.hasRing = true;
    }
  }

  changeDisposition(disposition) {
    this.disposition = disposition;
  }

  celebrateBirthday() {
    this.age++;
    }

}
var hob1 = new Hobbit("Frodo");
hob1.changeDisposition("cheery");
for (var i = 0; i < 38; i++){
hob1.celebrateBirthday();
}
console.log(hob1);
