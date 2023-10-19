const express = require ('express')
const server = express()
const port = 5000

// to convert all the incoming json data to javascript data 
server.use(express.json())

server.listen(port, ()=>{console.log(`Server is running on ${port}___`)})


server.post("/register",(req,res)=>{
    res.send("woked")
})

server.post("/login",(req,res)=>{
    console.log(req.body.acno);
    res.send("login worked")
})