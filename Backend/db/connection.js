const mongoose=require("mongoose")
require("dotenv").config()
const connect=mongoose.connect(process.env.mongodb)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Failed to connect:', err));


module.exports={connect}