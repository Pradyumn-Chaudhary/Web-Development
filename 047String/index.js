console.log("Strings in JavaScript")
let name = "JavaSript";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

console.log(name.length);

let friend = "HTML";

console.log("Its name is " + name + " and its friend name is " + friend);

//Template Literal
console.log(`Its name is ${name} and its friend name is ${friend}`);

//Escape Sequence Character
console.log("I am\"me");

let h = "Harry"
console.log(h.toUpperCase());
console.log(h.toLowerCase());

console.log(name.slice(0, 4));
console.log(name.slice(4));

//Only first occurance will replace
console.log(h.replace("ar", "ra"));

console.log(h.concat(" Hahahah"));

//remove whitespaces from starting
console.log("   Hello".trim());

//String is Immutable
console.log(name);
name = name.toUpperCase();
console.log(name);