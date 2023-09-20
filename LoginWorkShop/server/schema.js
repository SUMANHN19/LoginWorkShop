const mongoose = require("mongoose");
  
const userInfo = new mongoose.Schema(
  {
    fname:{
      type:String
    },
    lname:{
      type:String
    },
    dob:{
      type:String
    },
    fatherName:{
      type:String
    },
    address:{
      type:String
    },
    phoneNumber:{
      type:Number
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String
    },

  },{
  collection: "userINFO"
  }
)

 module.exports = mongoose.model("userINFO",userInfo);