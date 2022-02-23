const {Router} = require('express')
const router = Router()
const path = require("path");

router.get('/', async (req, res) => {

    res.sendFile(path.join(__dirname, '../front/build/index.html'));
    res.json({message: "Hello, React!"})
})

module.exports = router