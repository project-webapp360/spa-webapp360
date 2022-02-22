require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/userRouter')

const app = express()

const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static("public"))

app.use('/api', userRoutes)




async function start() {
    try {
        await mongoose.connect(process.env.MONGO_BASE_URL, {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()


