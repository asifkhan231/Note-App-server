const express = require('express')
const userRouter = require('./routs/userRouts')
const noteRouter = require('./routs/noteRouts')
const app = express()
const mongooss = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/notes", noteRouter)


app.get('/', (req, res) => {
    res.status(200).send('kya haal')
})

const PORT = process.env.PORT || 4000

mongooss.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(4000, () => {
            console.log('server started on port no. 4000')
        })
    })
    .catch((e) => {
        console.error(e)
    })
  