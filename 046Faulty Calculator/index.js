console.log("Faulty Calculator");

let a = Math.random() * 100;
let b = Math.random() * 100;
let operator = prompt("Enter Operation");

console.log(a, operator, b, "is equals to:");

if (a < 10 || b < 10) {
    if (operator == "+") {
        console.log(a - b);
    }
     else if (operator == "-") {
        console.log(a + b);
    }
     else if (operator == "*") {
        console.log(a / b);
    }
    else if (operator == "/") {
        console.log(a * b);
    }
    else {
        console.log("Invalid Operation")
    }
} else {
    if (operator == "+") {
        console.log(a + b);
    }
     else if (operator == "-") {
        console.log(a - b);
    }
     else if (operator == "*") {
        console.log(a * b);
    }
    else if (operator == "/") {
        console.log(a / b);
    }
    else {
        console.log("Invalid Operation")
    }
}
