require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const route=require("./Routes/route")
const app = express();

app.use(express.json());
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => console.log(err));

    app.use("/",route);
           
  
app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });