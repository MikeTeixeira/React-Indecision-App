class Person {
  constructor(name = "Anonymous", age = 0){
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    return `I am ${this.name}`;
  }

  getDescription(){
    return `${this.name} is ${this.age} year(s) old`;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);

    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    
    if (this.homeLocation) {
        greeting += ` And I am currently living in ${this.homeLocation}`
    }

    return greeting;
  }


}

const andrew = new Traveler("Andrew Mead", 26, "New York");
console.log(andrew.getGreeting());

const random = new Person(undefined,undefined);
console.log(random.getDescription());

