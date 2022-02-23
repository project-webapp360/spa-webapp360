const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const path = require("path");

router.get('/', (req, res) => {
    console.log('sdasdaasdsad')
    res.sendFile(path.join(__dirname, '../front/build/index.html'));
})

module.exports = router