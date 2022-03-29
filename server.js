require('dotenv').config()
const express = require("express")
const {dbConnect} = require('./DataBase/db')
dbConnect()

const router = require('./routers/route')
const app = express()
const PORT = process.env.PORT



app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(router)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
