const mongoose = require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("mongodb atlas connected");
}).catch(()=>{
    console.log("mongodb atlas not connected ");
})