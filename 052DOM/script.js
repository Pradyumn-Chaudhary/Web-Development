let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "beige";
boxes[2].style.color = "black"

document.getElementById("last").style.backgroundColor = "pink";

document.querySelector(".box").style.backgroundColor = "blue";

document.querySelectorAll(".box").forEach(e => {
    e.style.border = "2px solid black";
})