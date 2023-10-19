require('dotenv').config()

// import express
const express = require ('express')


// import router
const router= require('./routes/router')

// 2- create erver using express
const server = express()
const port = 5000 || process.env.port

// to convert all the incoming json data to javascript data 
server.use(express.json())


// router setr
server.use(router)

// import connection.js file
require('./db/connection')

server.listen(port, ()=>{console.log(`Server is running on ${port}___`)})


// server.post("/register",(req,res)=>{
//     res.send("woked")
// })

// server.post("/login",(req,res)=>{
//     console.log(req.body.acno);
//     res.send("login worked")
// })