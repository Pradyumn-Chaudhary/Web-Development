const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
//app.get or app.post or app.post or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Blog<>/h1");
});

app.get("/blog/:slug", (req, res) => {
  //http://127.0.0.1:3000/blog/python?mode=%22dark%22&region=%22in%22
  console.log(req.params);
  console.log(req.query);
  res.send(`<h1>${req.params.slug}<h1>`);
});

// app.get('/about',(req,res) => {
//   res.send("<h>About me</h>")
// })

// app.get('/blog', (req, res) => {
//     res.send("<h1>Blog</h1>")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
