console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hasAttribute("style"));
console.log(document.querySelector(".container").getAttribute("style"));
// document.querySelector(".container").setAttribute("style","display:inline");
// console.log(document.querySelector(".container").setAttribute("style","display:inline"));
console.log(document.querySelector(".container").attributes);

let div = document.createElement("div");
div.innerHTML = "I am <b>Created</b>"
div.setAttribute("class","created")
// document.querySelector(".container").append(div);
document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);

div.style.height = "70px";
div.style.border = "10px solid pink";
div.style.outline = "10px solid salmon";
div.style.margin = "25px 0px";

document.body.getElementsByTagName("button")[0].addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
});

function getColor() {
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    return `rgb(${a}, ${b}, ${c})`; 
}

document.querySelectorAll(".box").forEach(e => {
    e.style.color = getColor(); 
    e.style.backgroundColor = getColor(); 
});
