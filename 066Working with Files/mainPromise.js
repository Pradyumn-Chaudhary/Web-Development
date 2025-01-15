import fs from "fs/promises"

let a = await fs.readFile("Harry1.txt");

let b = await fs.appendFile("Harry1.txt", "This is amazing Promise");

console.log(a.toString());
