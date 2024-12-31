class Animal {
  constructor(name) {
    this.name = name;
    console.log("Animal is created");
  }
  eats() {
    console.log("Kha rha h");
  }
  jump() {
    console.log("Khud rha h");
  }
}

let rabbit = new Animal("Bunny");
console.log(rabbit);

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Sher aaya...");
  }
  eats() {
    super.eats();
    console.log("Kha rha h roar");
  }
}

let L = new Lion("Shera");
console.log(L);

console.log(L instanceof Lion);
console.log(L instanceof Animal);

console.log(rabbit instanceof Lion);
console.log(rabbit instanceof Animal);
