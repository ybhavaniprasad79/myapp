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
    },
    addressType:{
        type:String
    }

})



const cartSchema = new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity cannot be less than 1"],
      default: 1,
    },
  });


const userSchema =new mongoose.Schema({
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
        required:true
    },
    role:{
        type:String,
        default:"user",
        enum:["user","seller","admin"]
    },
    address:[{type:addressSchema}],
    isActivated:{
        type:Boolean,
        default:false
    },
    cart: [cartSchema],
    profilePhoto:{
        type:String
    }


})


const UserModel =mongoose.model("user",userSchema)

module.exports={UserModel}