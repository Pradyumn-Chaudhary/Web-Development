console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Rejected 1");
    }
    else {
        setTimeout(() => {
            console.log("I am done 1")
            resolve("Solved 1")
        }, 1000);
   }
});

// prom1.then((a) => {
//     console.log(a);
// }).catch((a) => {
//     console.log(a);
// });

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Rejected 2");
    }
    else {
        setTimeout(() => {
            console.log("I am done 2")
            resolve("Solved 2")
        }, 1000);
   }
});

// let p3 = Promise.all([prom1, prom2]);
let p3 = Promise.allSettled([prom1, prom2]);

p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})
