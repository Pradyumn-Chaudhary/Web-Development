function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function main() {
    let a = document.querySelector(".container");
    a.innerHTML = ""; // Clear container for each iteration

    await delay(1000);
    a.innerHTML += "Initializing Hacking<span class='blinking-dots'></span><br>";
    await delay(4000);
    a.innerHTML += "Reading your files<span class='blinking-dots'></span><br>";
    await delay(4000);
    a.innerHTML += "Password files detected<span class='blinking-dots'></span><br>";
    await delay(4000);
    a.innerHTML += "Sending all password and personal files to server<span class='blinking-dots'></span><br>";
    await delay(4000);
    a.innerHTML += "Cleaning up<span class='blinking-dots'></span><br>";
  }

  setInterval(() => {
    main();
  }, 20000); // Allow time for the process to complete