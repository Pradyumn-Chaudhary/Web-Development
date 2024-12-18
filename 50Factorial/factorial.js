let arr = [1, 2, 3, 4, 5, 6];
const factorial = (a, b) => {
    return a * b;
}
console.log(arr.reduce(factorial));

let fact = 1;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    fact *= element;
}
console.log(fact);