const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        // minLenth:3
    },

    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
        },

        phone:{
         type:Number,
         required:true,
        //  min:10
        },

        message:{
            type:String,
            required:true,
            // minLenth:3
    },

    date:{
        type:Date,
        default:Date.now
    }

})

// create collections

const User = mongoose.model("User",userSchema);

module.exports = User;