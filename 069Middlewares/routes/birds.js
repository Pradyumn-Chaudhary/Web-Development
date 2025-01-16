const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("Chak de phatte");
    next();
});

router.get('/', (req, res) => {
    res.send("ke kr rha h bhai");
});

router.get('/about', (req, res)=>{
    res.send("Aur bta sab badhiya");
})

module.exports = router;