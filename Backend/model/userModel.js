let mongoose = require("mongoose")

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user",
        enum:["admin", "user","seller"]
    },

    isActivated:{
        type:Boolean,
        default:false
    }

})


const UserModel =mongoose.model("user",userSchema)

module.exports={UserModel}

