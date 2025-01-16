const express = require("express");
const blog = require("./routes/blog")
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);

// app.get('/', (req, res) => {
//   console.log("Hello World!");
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   console.log("Its a Post Request");
//   res.send("Hello Post");
// })

// app.put('/', (req, res) => {
//   console.log("Its a Put Request");
//   res.send("Hello Put");
// })

app
  .get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("Its a Post Request");
    res.send("Hello Post");
  })
  .put("/", (req, res) => {
    console.log("Its a Put Request");
    res.send("Hello Put");
  });

app.get("/index", (req, res) => {
  console.log("Serving HTML");
  res.sendFile("templates/index.html", { root: __dirname });
});
app.get("/api", (req, res) => {
  res.json({ a: 5, b: 7, c: 7 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
