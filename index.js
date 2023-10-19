const express = require ('express')
const server = express()
const port = 5000
server.listen(port, ()=>{console.log(`Server is running on ${port}___`)})


server.post("/register",(req,res)=>{
    res.send("woked")
})

server.post("/login",(req,res)=>{
    res.send("login worked")
})