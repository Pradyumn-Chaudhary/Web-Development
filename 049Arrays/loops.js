let a = [1, 96, 46, 2.9, 58];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, array)=> {
    console.log(value, index, array);
})

let newA = a.map((e, idx, arr) => {
    return e ** 2;
})

console.log(newA);

const red = (a, b) => {
    return a + b;
}
console.log(a.reduce(red));