const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


require("./schema");


const port = 5000;
ATLAS_URI = "mongodb+srv://suman:abcd123456789@cluster0.sqveovh.mongodb.net/?retryWrites=true&w=majority";

//server config
app.use(cors());
app.use(express.json());


//mongoose config
mongoose
  .connect(ATLAS_URI, {
    dbName: "WorkShopDataBase",
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log("Successfully connected to MongoDB.");
    })
  })
  .catch((e) => console.log(e));
 

  //api config
const UserInfo = mongoose.model("userINFO");

app.post("/register", async (req, resp) => {
    try {
        const user = UserInfo(req.body);
        let result = await user.save();
        result = result.toObject();
        resp.send(req.body);
 
    } catch (e) {
        resp.send("Something Went Wrong");
        console.log(e);
    }
});



app.get("/user/:email", async (req, resp)=>{
    try{
        const data = await UserInfo.findOne( {email:req.params.email});
        resp.send(data);
    }catch(e){
        resp.send("Something Went Wrong");
        console.log(e);
    }
})

app.get("/alluser", async (req, resp)=>{
    try{
        const data = await UserInfo.find( {});
        resp.send(data);
    }catch(e){
        resp.send("Something Went Wrong");
        console.log(e);
    }
})


app.put("/uppassword/:email", async (req, resp)=>{
    try{
        const data = await UserInfo.updateOne({email:req.params.email},{$set:req.body });
        resp.send(data);
    }catch(e){
        resp.send("Something Went Wrong");
        console.log(e);
    }
})