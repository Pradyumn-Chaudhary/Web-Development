const express = require("express")
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Blog");
})

router.get('/:slug', (req, res) => {
    res.send(`${req.params.slug}`);
})

module.exports = router;