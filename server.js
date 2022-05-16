require('dotenv').config()
const express = require("express")
const {dbConnect} = require('./DataBase/db')
dbConnect()

const router = require('./routers/route')
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin',"https://my-imcs.netlify.app/showImc", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(router)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
