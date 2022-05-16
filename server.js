require('dotenv').config()
const express = require("express")
const {dbConnect} = require('./DataBase/db')
dbConnect()

const router = require('./routers/route')
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({ origin: "https://my-imcs.netlify.app", credentials: true }))

app.use(router)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
