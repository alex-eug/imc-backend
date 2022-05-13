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
    app.use(cors({
        origin: [ "http://localhost:3000"],
        credentials:true,
      
        allowedHeaders: ["authorization", "Content-Type"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
      }));
    next();
});
app.get('/',(req,res)=>{
    res.json('hello, heroku')
})

app.use(router)
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
