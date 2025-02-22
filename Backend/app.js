const express = require("express");
const cors=require("cors");
const ErrorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());


app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true, // enable cookies
}));

const {userRoute} = require("./controllers/userRoute")

app.get("/test", async (req, res) => {
  res.send("hello.....");
});

app.use("/user",userRoute)

app.use(ErrorMiddleware);

module.exports = { app };