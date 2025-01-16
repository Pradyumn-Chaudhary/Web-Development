const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const birds = require("./routes/birds");

app.use(express.static("public"));
app.use("/birds", birds);

app.use((err, req, res, next) => {
  console.log(err.stack);  // Logs the error stack trace to the console for debugging.
  res.status(500).send("Something Broken"); // Sends a 500 Internal Server Error response to the client.
});

// Middleware 1
app.use((req, res, next) => {
    console.log(req.header);
    req.sigma = "This is Sigma Development Express"
    fs.appendFileSync("logs.txt", `${new Date().toLocaleString()} & ${req.method}\n`)
    console.log(`${new Date().toLocaleString()} & ${req.method}`);
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("m2");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World! ' + req.sigma)
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})