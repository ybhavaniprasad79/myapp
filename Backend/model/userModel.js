let mongoose = require("mongoose")

const addressSchema=new mongoose.Schema({
    country:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    distrit:{
        type:String,
        require:true

    },
    pincode:{
        type:Number,
        require:true
    },
    area:{
        type:String
    }

})


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        // unique:true,
        // match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,"please add a valid email address"]
    
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    },
    address:{
        type:addressSchema
    },
    isActivated:{
        type:Boolean,
        default:false
    }

})


const UserModel =mongoose.model("user",userSchema)

module.exports={UserModel}