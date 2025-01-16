const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now"
    let arr = ["Hi","Hello","Hey","How are you"]
    //   res.sendFile(__dirname + '/template/index.html')
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas when and why?";
    let blogContent = "Adidas is a nice brand";
    res.render(`blog`,{blogTitle : blogTitle, blogContent : blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})