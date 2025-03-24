let mongoose = require("mongoose")

const ProductSchema =new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true,"Please enter the product name"]
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    images:{
        type:[String],
        require:true
    },
    tags:{
        type:[String],
        require:true
    },
    email:{
        type:String,
        require:true,
        // match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,"please add a valid email address"]
    
    },
    


},
{
    timestamps:true,
}

);

const ProductModel=mongoose.model("Product",ProductSchema);


module.exports =ProductModel