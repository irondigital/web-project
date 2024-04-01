const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/pure",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connections sucessful");
}).catch((error)=>{
    console.log(error);
})