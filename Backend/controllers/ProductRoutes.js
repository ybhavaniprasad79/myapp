let express=require("express")

const catchAsyncError = require("../middleware/catchAsyncError");
const Errorhadler=require("../utils/errorhadler")
const productRouter= express.Router()
const {UserModel} = require("../model/userModel")
const ProductModel=require("../model/productModel")
const {productUpload}=require("../middleware/multer")
let path=require('path')
const mongoose=require("mongoose")


productRouter.post("/create-product",productUpload.array("images",10), catchAsyncError(async(req, res, next)=>{
    const { email,name, description,category,tags,price,stock} = req.body;

    const images =req.files.map((file)=>path.basename(file.path));
    console.log(email,name, description,category,tags,price,images);

    if (!email ||!name ||!description ||!category ||!tags ||!price ||!images ||!stock) {
       return  next(new Errorhadler("All fields are required",400))
    }
    // let user=await UserModel.findOne({email})
    // console.log(email)
    // if(!user){
    //     return next(new Errorhadler("user is not exist",404))
    // }
    let product=new ProductModel({email,name, description,category,tags,price,images,stock})
  

    await product.save()
    res.status(201).json({message:"Product created successfully"})


}))


productRouter.get("/allproduct", catchAsyncError(async(req, res, next)=>{
      
    let allProduct = await ProductModel.find()
    res.status(200).json({status:true,message:allProduct})
}))




productRouter.delete("/delete/:id",catchAsyncError(async(req,res,next)=>{
   console.log("kjmk")
      let id=req.params.id
      if(!id){
        return next(new Errorhadler("id is not passed",400))
      }
      if (!mongoose.Types.ObjectId.isValid(id)) {
       return next(new Errorhadler("Invalid ObjectId", 400));
      }
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      if (!deletedProduct) {
          return next(new Errorhadler("Product not found", 404));
      }
      res.status(200).json({status:true,message:"deleted successfully"})
      
}))



productRouter.put("/update/:id",productUpload.array("images",10),catchAsyncError(async(req,res,next)=>{
   
   let id=req.params.id
   if(!id){
     return next(new Errorhadler("id is not passed",400))
   }
   if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new Errorhadler("Invalid ObjectId", 400));
   }
   
   let { email,name, description,category,tags,price,stock,images} = req.body;
   const imagesArr =req.files.map((file)=>path.basename(file.path));
   console.log(images,imagesArr)
   if(!images){
       images=[]
   }
   else{
       images =Array.isArray(images)?images:[images]
   }
   console.log(images,imagesArr,"88")
   const updated =await ProductModel.findByIdAndUpdate(id,{ email,name, description,category,tags,price,stock,images:[...imagesArr,...images]},{new:true})
   res.status(200).json({status:true,message:"updated successfully",data:updated})
   
}))





module.exports =productRouter;