// import {a,b,c} from "./mymodule1.js"
// console.log(a,b,c);

// import harry from "./mymodule1.js"
// console.log(harry);


// (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives here
//   });

const a = require("./mymodule2.js");
console.log(a, __dirname, __filename);