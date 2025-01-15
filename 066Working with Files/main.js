const fs = require("fs");

console.log(fs);

console.log("starting");
// fs.writeFileSync("Harry.txt", "Harry is a good boy");

fs.writeFile("Harry1.txt", "Harry is a nice Teacher", () => {
    console.log("Done");
    fs.readFile("Harry1.txt", (error, data) => {
        console.log(error, data.toString());
    }
    )
});

fs.appendFile("Harry1.txt", " also a good boy", (error, data) => {
    console.log(data);
    console.log("mtlb kuch bhi");
    
}
);
console.log("ending");


