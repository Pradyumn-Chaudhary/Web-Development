let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof (arr));

console.log(arr.length);
console.log(arr[3]);
console.log(arr[4]);

arr[4] = 7;
console.log(arr[4]);

let array = arr.toString();
console.log(array);

console.log(arr.join(" and "));

console.log(arr.pop());
console.log(arr.length);
console.log(arr.shift());

arr.push("Sigma");
console.log(arr.length);
arr.unshift("Alpha");
console.log(arr);

delete arr[2];
console.log(arr.length);
console.log(arr);

let arr1 = [8, 9, 0.5, 7];
let arr2 = arr.concat(arr1);

console.log(arr2);
console.log(arr2.concat(arr1).concat(arr));

arr2.sort();
console.log(arr2);

arr2.splice(1, 3, "Hi", "Hello");
console.log(arr2);

console.log(arr2.slice(1, 4));

arr2.reverse();
console.log(arr2);