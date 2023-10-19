    // create model


    // import mongoose 
    const mongoose=require('mongoose')

    // define schema-filed and values of model (collection)
    const usersSchema=new mongoose.Schema({
        acno:Number,
        uname:String,
        psw:String,
        balance:Number,
        transactions:[]
        
    })

    // model collecction name
    const users=new mongoose.model("users",usersSchema)

    // export model - to import another files
    module.exports=users