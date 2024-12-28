console.log("Hi");
console.log("Hey!");
console.log("Hello");

setTimeout(() => {
    console.log("Timeout Function 1")
}, 1000);

setTimeout(() => {
    console.log("Timeout Function 2")
}, 1000);

console.log("End");

function callback(arg) {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
