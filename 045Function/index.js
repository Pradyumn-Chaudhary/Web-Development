function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are looking good!");
}

nice("Harry");
nice("Shradha");

function sum(a, b , c=5) {
  console.log(a + b + c);
}

sum(3, 5, 8);
sum(9.3, 6.1);

function minus(a, b) {
  return a - b;
}

result = minus(199, 46);
console.log(result);

console.log(minus(223, 140));

const func1 = (x) => {
    console.log("I am a arrow function", x);
}

func1(34);
func1(56);
func1(87);