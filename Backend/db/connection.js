const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Failed to connect:', err));
module.exports={connect}