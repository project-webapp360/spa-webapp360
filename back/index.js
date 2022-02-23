require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require("path");

const userRoutes = require('./routes/userRouter')
const indexRouter = require('./routes/indexRouter')


const app = express()

const PORT = process.env.PORT || 6000


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
// app.use(express.static("public"))

app.use(express.static(path.join(__dirname, '../front/build')));
app.use('/', indexRouter)
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


