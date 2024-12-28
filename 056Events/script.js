let Dark = document.getElementById("Dark");

// Dark.addEventListener("click", () => {
//     document.body.classList.toggle('dark-mode');
// });

Dark.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});


// document.addEventListener("contextmenu", () => {
//     event.preventDefault();
//     alert("You clicked right!!")
// })

document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode);
})
